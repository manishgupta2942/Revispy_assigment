const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const interestRoutes = require('./routes/interestRoutes');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend
}));
const _dirname = path.resolve();


dotenv.config();
connectDB();


app.use(express.json());



app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/interests', interestRoutes);
app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
