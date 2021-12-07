// import d'express
const express = require('express');

// création de l'app
const app = express();

// CRUD
// Create: app.post()               HTTP POST
// Read: app.get()                  HTTP GET
// Update: app.put() ou app.patch() HTTP PUT OU PATCH
// Delete: app.delete()             HTTP DELETE

/*
*   Récupère les utilisateurs
*/
app.get('/users', (req, res) => {
    console.log(`${req.method} sur ${req.path}`);
    res.end('OK');
});

/*
*   Récupère un utilisateur avec son id donné en param de route
*/
app.get('/users/:id', (req, res) => {

});
/*
*   Créer un utilisateur
*/
app.post('/users', (req, res) => {

});
/*
*   Mets à jour un utilisateur
*/
app.put('/users/:id', (req, res) => {

});
/*
*   Supprime un utilisateur
*/
app.delete('/users/:id', (req, res) => {

});



// écoute sur le port donné en paramètre
app.listen(3000);