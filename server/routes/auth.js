import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/register', async (req,res)=>{
  const { username, email, password } = req.body;
  const hashed = await bcrypt.hash(password,10);
  const user = new User({username,email,password:hashed});
  await user.save();
  res.json({message:'User registered'});
});

router.post('/login', async(req,res)=>{
  const { email, password } = req.body;
  const user = await User.findOne({email});
  if(!user) return res.status(400).json({message:'Invalid credentials'});
  const isMatch = await bcrypt.compare(password,user.password);
  if(!isMatch) return res.status(400).json({message:'Invalid credentials'});
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET||'secret',{expiresIn:'1d'});
  res.json({token,user:{id:user._id,username:user.username,email:user.email}});
});

export default router;
