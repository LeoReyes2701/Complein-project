const upload = require('../utils/multer');
const Post = require('../models/post');
const User = require('../models/user')
const postRouter = require('express').Router();

postRouter.post('/',upload.single('image'),  async (request, response) => {
  const file = request.file;
  const { stars, title, rest, description } = request.body;

  //Como debe quedar mongo
  const newPost = new Post({
    stars,
    title,
    rest,
    description,
    image: file.filename,
    User: request.user.id,
  });
  const user = await User.findById(request.user.id);

  user.posts = user.posts.concat(newPost.id);

  await user.save();


  const elem = await newPost.save();

  //console.log(elem);
  return response.sendStatus(200); // Termina la petición
});

postRouter.get('/',  async (request, response) => {
  const postList = await Post.find({}).populate('User');
  return response.status(201).json(postList)
});

postRouter.get('/:id',  async (request, response) => {
  const postList = await Post.findById(request.params.id).populate("comentario");
  return response.status(201).json(postList)
});

postRouter.patch('/:id', async (request, response) => {
  const { user } = request;
  const postToLike = await Post.findById(request.params.id);
  let liked = false

  if (postToLike.likes.includes(user.id)) {
    postToLike.likes = postToLike.likes.filter(id => id !== user.id);
    console.log('id eliminado');
  } else {
    postToLike.likes.push(user.id);
    liked = true
    console.log('id agregado de nuevo');
  }

  const postLiked = await postToLike.save();
  const arrayLikes = postToLike.likes;
  console.log(postToLike.likes);
  console.log(arrayLikes.length);
  return response.status(200).json({postLiked, liked});
});

module.exports = postRouter;
////////////////////////////////////////////////////////////////////////////////////////
// postRouter.delete('/:id',  async (request, response) => {
//   const postList = await Post.deleteOne({ id: request.id })
//   return response.status(200).json(postList)
// });
////////////////////////////////////////////////////////////////////////////////////////

