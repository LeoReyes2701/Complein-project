const comentario = require('../models/comentario');
const post = require('../models/post');

const comentariosRouter = require('express').Router();


comentariosRouter.post('/',  async (request, response) => {
    const { mensaje, postId } = request.body;
  
    //Como debe quedar mongo
    const newComentario = new comentario({
     mensaje,
     post: postId,
     User: request.user.id,
    })
  
    const elem = await newComentario.save();
    const jeje  = await post.findById(postId);

    jeje.comentario = jeje.comentario.concat(elem.id);

    const postNuevo = await jeje.save();

   await  postNuevo.populate("comentario")
  
    //console.log(elem);
    return response.status(200).json(postNuevo); // Termina la petición
  });


module.exports = comentariosRouter;