import mongoose from 'mongoose';
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: { type: String },
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Post', PostSchema);
