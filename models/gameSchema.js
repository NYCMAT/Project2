const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    
    title: {type: String, required: true},
    developer: {type: String, required: true},
    system: {type: String, required: true},
    release: {type: String, required: true}
  });
  
  const game = mongoose.model('game', gameSchema);

module.exports = game;