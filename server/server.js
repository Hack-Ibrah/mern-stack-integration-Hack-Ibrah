import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';
import categoryRoutes from './routes/categories.js';
import commentRoutes from './routes/comments.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/comments', commentRoutes);

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.listen(process.env.PORT || 5000, () => console.log('Server running'));
