![image](https://github.com/user-attachments/assets/5d489e3d-6931-4908-bb85-1aaf0e5f828e)
![WhatsApp Image 2024-10-27 at 21 48 02_13cae74b](https://github.com/user-attachments/assets/bf4da1c1-315b-4508-96f2-c546df656992)
![WhatsApp Image 2024-10-27 at 21 48 48_a4705eea](https://github.com/user-attachments/assets/2c16e55f-cd6f-4c3c-8d7a-b8fd65978ed6)
![WhatsApp Image 2024-10-27 at 21 49 17_8b029ce6](https://github.com/user-attachments/assets/72c0fc2a-526f-4d6d-a64a-cc00da06d68b)



Project Overview
This project is a full-stack web application where users can register, log in, and select their interests. The primary goal is to provide a personalized experience, allowing users to save and manage their preferences securely.

Frontend
Tech Stack:

React: Used for building interactive and dynamic user interfaces.
Vite: A fast build tool and development environment for modern JavaScript, making the development process smoother.
Tailwind CSS: Utilized for efficient and responsive styling through utility classes.
React Router: For navigation and route management, enabling a seamless single-page application experience.
Features and Components
SignUp and Login Pages:

These pages allow new users to register and existing users to log in.
The SignUp page collects the user’s name, email, and password, and upon successful registration, a token is stored in localStorage for authentication.
The Login page validates user credentials and issues a token if the login is successful, which is then stored in localStorage for securing routes.
Protected Page:

This page is accessible only to logged-in users and displays a list of categories where users can select their interests.
I implemented pagination to show six categories per page for easy navigation and performance.
Users can mark categories they’re interested in, and when they click “Save Interests,” their selections are securely stored in the backend.
Interests Page:

Displays the user’s saved interests, allowing them to reset or modify their preferences.
Users can see a list of interests saved from the Protected Page and use a "Reset Interests" button to clear their selections, redirecting them back to the Protected Page to start over if needed.
Header:

The header includes navigation links and remains fixed at the top for easy access.
It contains links to key sections like "Categories," "Sale," "Trending," and more, making navigation smooth.
Backend
Tech Stack:

Node.js: Provides a non-blocking, event-driven server environment ideal for handling API requests.
Express: A minimal, fast framework for creating robust APIs.
MongoDB: Used as a NoSQL database, flexible for storing user and interest data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, handling schema-based solutions and validation.
JWT (JSON Web Tokens): Used for user authentication, enabling secure, stateless sessions.
bcrypt: Used to hash user passwords, ensuring secure storage in the database.
dotenv: Manages environment variables like API keys and database URIs.
Backend API and Functionality
Authentication (authRoutes):

Manages user registration and login.
The Register route creates a new user account, hashes the password with bcrypt, and stores it in MongoDB.
The Login route authenticates users, verifies the password, and issues a JWT token.
Passwords are hashed before storage, and JWT tokens secure routes to ensure only authenticated users can access certain pages.
Categories (categoryRoutes):

Provides a list of categories that users can select as their interests.
Fetches categories from MongoDB, utilizing pagination to load six categories per page.
The frontend requests categories with an authenticated request, and the backend verifies the JWT token for security.
Interests (interestRoutes):

Manages the storage and retrieval of user-selected interests.
The Save Interests route accepts selected category IDs from the frontend and saves them to MongoDB.
The Get Interests route fetches the saved interests for a user, allowing them to view or reset their selections.
Database and Models:

User Model: Stores user details such as name, email, and password. Passwords are hashed using bcrypt.
Category Model: Holds the list of categories available for user selection.
Interest Model: Links user IDs to their selected category IDs, representing their interests.
MongoDB and Mongoose handle schema validation, data relationships, and queries.
