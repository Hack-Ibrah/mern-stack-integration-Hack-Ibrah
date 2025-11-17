import express from 'express';
import Post from '../models/Post.js';
import multer from 'multer';
import authMiddleware from '../middleware/auth.js';
const router = express.Router();

const storage = multer.diskStorage({destination:'uploads/', filename:(req,file,cb)=>cb(null,Date.now()+file.originalname)});
const upload = multer({storage});

router.get('/', async(req,res)=>{ const posts=await Post.find().populate('category').populate('author'); res.json(posts); });
router.get('/:id', async(req,res)=>{ const post=await Post.findById(req.params.id).populate('category').populate('author'); res.json(post); });
router.post('/', authMiddleware, upload.single('image'), async(req,res)=>{ const newPost=new Post({...req.body,author:req.user.id, image:req.file?.path}); await newPost.save(); res.json(newPost); });
router.put('/:id', authMiddleware, async(req,res)=>{ const updated=await Post.findByIdAndUpdate(req.params.id,req.body,{new:true}); res.json(updated); });
router.delete('/:id', authMiddleware, async(req,res)=>{ await Post.findByIdAndDelete(req.params.id); res.json({message:'Post deleted'}); });

export default router;
