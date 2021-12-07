// import d'express
const express = require('express');

// import des routes
const userRoute = require('./routes/users.route');

// création de l'app
const app = express();

// Middlewares
app.use(express.json([])); // Middleware pour passer le JSON

// utilisation des routes
app.use(userRoute);

// écoute sur le port donné en paramètre
app.listen(3000);