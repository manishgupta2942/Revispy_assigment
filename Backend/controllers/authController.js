const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const crypto = require('crypto');



exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Generate a random verification code
        const verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase(); // e.g., 'A1B2C3'

        // Create the user in the database with the verification code
        const user = await User.create({ name, email, password, verificationCode });

        // Send the verification email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Verify Your Email',
            text: `Your verification code is: ${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({ message: 'Registration successful. Please check your email for the verification code.' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.verifyEmail = async (req, res) => {
  const { email, verificationCode } = req.body;
  console.log(email);
  console.log("hbtrhbt");
  
  

  try {
      const user = await User.findOne({ email });

      if (!user) {
          return res.status(400).json({ error: 'User not found' });
      }

      if (user.isVerified) {
          return res.status(400).json({ error: 'User already verified' });
      }

      if (user.verificationCode !== verificationCode) {
          return res.status(400).json({ error: 'Invalid verification code' });
      }

      // Mark user as verified and clear the verification code
      user.isVerified = true;
      user.verificationCode = undefined;
      await user.save();
      console.log("ho rha hai");
      

      res.status(200).json({ message: 'Email successfully verified' });
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
};



// Login function with check for email verification
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        if (!user.isVerified) {
            return res.status(400).json({ error: 'Please verify your email before logging in' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
};

