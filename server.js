// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const game = require('./models/gameSchema.js');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
const mongoURI = 'mongodb://localhost:27017/game';
app.use(express.static('public'))
// =======================================
//              DATABASE
// =======================================
const Game = require('./models/gameSeed.js');
const { db } = require('./models/gameSchema.js');
// ===========================
//           ROUTES
// ===========================
//new item route
app.get('/game/new', (req, res) => {
    res.render('new.ejs')
});

app.post('/game', (req, res) => {
    game.create(req.body, (error, createdgame) => {
        res.redirect('/game')
    })
  });

//update(replace whole data)
app.put('/game/:id', (req, res)=>{
    game.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
        res.redirect('/game');
    });
});
//edit
app.get('/game/:id/edit', (req, res)=>{
    game.findById(req.params.id, (err, foundgame)=>{ //find the game
        res.render(
    		'edit.ejs',
    		{
    			game: foundgame //pass in found game
    		}
    	);
    });
});  

//delete
app.delete('/game/:id', (req, res)=>{
    game.findByIdAndRemove(req.params.id, (error,data) => {
        res.redirect('/game');
    });
});

// game.collection.drop()

//seed route
app.get('/game/seed', (req, res) => {
    game.create(Game, (error, GameArray) => {
      res.send(GameArray)
    })
  })

 

// index route
app.get('/game', (req, res) => {
    game.find({}, (error, allGame) => {
        res.render(
            'index.ejs',
            {
                game: allGame
            }
        )
    })
})

//show route
app.get('/game/:id', (req, res) => {
    game.findById(req.params.id, (error, foundgame) => {
        res.render(
            'show.ejs',
            {
                game: foundgame
            }
        )
    })
})




// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
    console.log(`Video Game app listening on port: ${port}`)
  });

//   mongoose.connect('mongodb://localhost:27017/game', () => {
//     console.log('The connection with mongod is established')
// })
  
  mongoose.connect('mongodb+srv://NYC_Mat:student@sei.kev6jdn.mongodb.net/?retryWrites=true&w=majority', () => {
      console.log('The connection with mongod is established')
  })




