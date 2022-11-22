const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    
    cardgame: {type: String, required: true},
    name: {type: String, required: true},
    set: {type: String, required: true},
    rarity: {type: String, required: true},
    img: String
  });
  
  const game = mongoose.model('game', gameSchema);

module.exports = game;