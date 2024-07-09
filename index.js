const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const albumRoutes = require("./routes/album");
const path = require("path");
const app = express();
// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost/phototheque")
  .then(() => console.log("Connexion avec la base de données MongoDb réussie !!!!!!!!!!!!!!!"));
// Configuration de EJS
app.set("view engine", "ejs");
// Middleware pour lire le contenu des requêtes
app.use(bodyParser.urlencoded({ extended: true }));
// Servir les dossiers statiques
app.use(express.static(path.join(__dirname, "public")));
//app.use('/uploads', express.static('uploads'));
// Utiliser les routes
app.use('/albums', albumRoutes);
app.get("/", (req, res) => {
  res.redirect("/albums");
});
// Lancement du serveur web
const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Le serveur écoute sur le port: ${PORT}`);
});
