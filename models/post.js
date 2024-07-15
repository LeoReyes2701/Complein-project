const mongoose = require('mongoose');
const postsSchema = new mongoose.Schema({
    stars: String,
    title: String,
    rest: String,
    description: String,
    image: String,
    likes: [],
    comentario :[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comentario'
    }],
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});


//Configuracion de la respuesta del usuario
postsSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const post = mongoose.model('post', postsSchema);

module.exports = post; 