const usersRouter = require('express').Router(); // Router es lo que va a guardar el registro de los modelos de la base de datos los Post, Get, Put, Delete
const User = require('../models/user');
const upload = require('../utils/multer');
const bcrypt = require('bcrypt'); // Para encriptar la contraseña
const jwt = require('jsonwebtoken'); // Para crear el token
const nodemailer = require('nodemailer'); // Para enviar correos
const { PAGE_URL } = require('../config');


usersRouter.post('/', async (request, response) => {
    const  {name, email, password, phone, username} = request.body;

    if (!name || !email || !password || !phone || !username) {
        return response.status(400).json({
            error: 'Todos los campos son requeridos'
        });
    }

    const userExist = await User.findOne({email});

    if (userExist) {
        return response.status(400).json({
            error: 'El email ya se encuentra en uso.'
        });
    };

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds);
    
    const newUser = new User ({
        name,
        email,
        passwordHash,
        phone,
        username,
        profilePic: null
    });

    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.ACCES_TOKEN_SECRET, {
        expiresIn: '1d'
    });

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
    });

    // <a href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar correo</a>

    await transporter.sendMail({
    from: process.env.EMAIL_USER, // sender address
    to: savedUser.email, // list of receivers
    subject: 'Verificación de Correo', // Subject line
    text: "Buenassss", // plain text body
    html: `
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificación de Correo</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        
        body {
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }
        .header {
            background-color: #df4353;
            color: #ffffff;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .content p {
            font-size: 18px;
            line-height: 1.6;
            color: #333333;
            margin: 20px 0;
        }
        .button {
            display: inline-block;
            margin: 20px 0;
            padding: 15px 30px;
            background-color: #df4353;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-size: 18px;
            font-weight: 700;
            transition: background-color 0.3s ease;
        }
        .button:hover {
            background-color: #c12b3b;
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #777777;
            background-color: #f4f4f4;
        }
        .footer p {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Verificación de Correo</h1>
        </div>
        <div class="content">
            <p>¡Hola, bienvenido👋!</p>
            <p>Gracias por registrarte. Por favor, haz clic en el enlace de abajo para verificar tu correo electrónico:</p>
            <a class="button" href="${PAGE_URL}/verify/${savedUser.id}/${token}">Verificar correo</a>
        </div>
        <div class="footer">
            <p>&copy; Complein 2024.</p>
        </div>
    </div>
</body>
</html>
    `,
});

    return response.status(201).json('Usuario creado, porfavor revisa tu correo');
});


usersRouter.patch('/:id/:token', async (request, response) => {
    try {
        const token = request.params.token;
        const decodedToken = jwt.verify(token, process.env.ACCES_TOKEN_SECRET);
        const id = decodedToken.id;
        await User.findByIdAndUpdate(id, {verified: true})
        return response.sendStatus(200);
    } catch (error) {
        // Encontrar el email del usauario
        const id = request.params.id;
        console.log(request.params);
        const { email } = await User.findById(id);

        // Firmar el nuevo token
        const token = jwt.sign({ id: id }, process.env.ACCES_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        // Enviar el correo
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
        });
    
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // sender address
            to: email, // list of receivers
            subject: 'Verificacion de Correo', // Subject line
            text: "Buenassss", // plain text body
            html: `
            <!DOCTYPE html>
            <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Verificación de Correo</title>
            <style>
                body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
                }
                .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                }
                .header {
                background-color: #4CAF50;
                color: #ffffff;
                padding: 20px;
                text-align: center;
                }
                .content {
                padding: 20px;
                }
                .content p {
                font-size: 16px;
                line-height: 1.5;
                }
                .button {
                display: block;
                width: 200px;
                margin: 20px auto;
                padding: 10px 0;
                text-align: center;
                background-color: #4CAF50;
                color: #ffffff;
                text-decoration: none;
                border-radius: 4px;
                font-size: 16px;
                }
                .footer {
                text-align: center;
                padding: 10px;
                font-size: 12px;
                color: #777777;
                background-color: #f4f4f4;
                }
            </style>
            </head>
            <body>
            <div class="container">
                <div class="header">
                <h1>Verificación de Correo</h1>
                </div>
                <div class="content">
                <p>¡Hola!</p>
                <p>Gracias por registrarte. Por favor, haz clic en el enlace de abajo para verificar tu correo electrónico:</p>
                <a href="${PAGE_URL}/verify/${id}/${token}" class="button">Verificar correo</a>
                <p>Si no solicitaste esta verificación, puedes ignorar este correo.</p>
                </div>
                <div class="footer">
                <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
                </div>
            </div>
            </body>
            </html>
        
            `, // html body
        });

        return response.status(400).json({
            error: 'El link ya expiro, se ha enviado un nuevo correo de verificacion a su correo.'
        });
    }
    
});

usersRouter.get('/:id', async (request, response) => {
    try {
        const user = await User.findById(request.params.id)
        if (user) {
            return response.status(200).json(user)
        }else{
            return response.status(200).json({msg:'User not found'})
        }
    } catch (error) {
        return response.status(400).json(error)
    }
});

usersRouter.put('/:id', upload.single('profilePic'), async (request, response) => {
    const { name, email, password, phone, username } = request.body;
    const profilePic = request.file ? request.file.filename : null;
    const userUpdates = {};

    if (name) userUpdates.name = name;
    if (email) userUpdates.email = email;
    if (password) {
        const saltRounds = 10;
        userUpdates.passwordHash = await bcrypt.hash(password, saltRounds);
    }
    if (phone) userUpdates.phone = phone;
    if (username) userUpdates.username = username;
    if (profilePic) userUpdates.profilePic = profilePic;

    try {
        const updatedUser = await User.findByIdAndUpdate(request.params.id, userUpdates, { new: true });
        return response.status(200).json(updatedUser);
    } catch (error) {
        return response.status(400).json(error);
    }
});

module.exports = usersRouter;