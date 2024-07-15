require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const logoutRouter = require('./controllers/logout');
const postRouter = require('./controllers/posts');
const comentariosRouter = require('./controllers/comentarios');
const { userExtractor } = require('./middleware/auth');
const { MONGO_URI } = require('./config');



(async() =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log(MONGO_URI);
        console.log('Conectado a Mongooo');
    } catch (error) {
        console.log(error);
    }
})();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Rutas front-end
app.use('/', express.static(path.resolve('views', 'sign-up')))
app.use('/styles', express.static(path.resolve('views', 'styles')))
app.use('/login', express.static(path.resolve('views', 'login')))
app.use('/home', express.static(path.resolve('views', 'home')))
app.use('/post/:id', express.static(path.resolve('views', 'comentarios')))
app.use('/upload', express.static(path.resolve('views', 'uploadpost')))
app.use('/profile', express.static(path.resolve('views', 'profile')))
app.use('/components', express.static(path.resolve('views', 'components')))
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')))
app.use('/uploads', express.static(path.resolve('uploads')));



// Rutas back-end
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/comentarios', userExtractor, comentariosRouter);
app.use('/api/posts', userExtractor, postRouter);

app.use(morgan('tiny'));

module.exports = app;