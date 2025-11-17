# MERN Blog Application

## Overview
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) blog application with user authentication, CRUD operations, image uploads, comments, pagination, and search functionality.

## Setup Instructions

### Server
1. cd server
2. npm install
3. Create a `.env` file based on `.env.example`
4. Run server: `npm run dev`

### Client
1. cd client
2. npm install
3. Create a `.env` file based on `.env.example`
4. Run client: `npm run dev`

## API Endpoints

### Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

### Posts
- GET `/api/posts`
- GET `/api/posts/:id`
- POST `/api/posts` (protected)
- PUT `/api/posts/:id` (protected)
- DELETE `/api/posts/:id` (protected)

### Categories
- GET `/api/categories`
- POST `/api/categories`

### Comments
- GET `/api/comments/:postId`
- POST `/api/comments/:postId` (protected)

## Features
- User registration and login
- Create, read, update, delete posts
- Image uploads for posts
- Comments on posts
- Pagination and search
- CRUD for categories

## Screenshots
Add screenshots of your application here.
