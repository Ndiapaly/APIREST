// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("User", userSchema);
/*Dans ce fichier, nous avons créé un modèle User qui contient trois champs : name, email et age. 
Nous avons également défini les types de données et les contraintes pour chaque champ. 
Enfin, nous avons exporté le modèle User.*/
