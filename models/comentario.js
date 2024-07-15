const mongoose = require('mongoose');
const comentarioSchema = new mongoose.Schema({
    mensaje: String,
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
});

comentarioSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const comentario = mongoose.model('comentario', comentarioSchema);

module.exports = comentario;