import express from 'express';
import Comment from '../models/Comment.js';
import authMiddleware from '../middleware/auth.js';
const router=express.Router();

router.get('/:postId', async(req,res)=>{ const comments=await Comment.find({post:req.params.postId}).populate('user'); res.json(comments); });
router.post('/:postId', authMiddleware, async(req,res)=>{ const comment=new Comment({post:req.params.postId,user:req.user.id,content:req.body.content}); await comment.save(); res.json(comment); });

export default router;
