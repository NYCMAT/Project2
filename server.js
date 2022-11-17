// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const game = require('./models/gameSchema.js');
const methodOverride = require('method-override');
const Game = require('./models/gameSeed.js');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))
// const mongoURI = 'mongodb+srv://NYC_Mat:student@sei.kev6jdn.mongodb.net/?retryWrites=true&w=majority';
app.use(express.static('public'))

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}

// =======================================
//              DATABASE
// =======================================

// const { db } = require('./models/gameSchema.js');
// ===========================
//           ROUTES
// ===========================
//new item route
// app.get('/game/new', (req, res) => {
//     res.render('new.ejs')
// });

// app.post('/game', (req, res) => {
//     game.create(req.body, (error, createdgame) => {
//         res.redirect('/game')
//     })
//   });

// //update(replace whole data)
// app.put('/game/:id', (req, res)=>{
//     game.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedModel)=>{
//         res.redirect('/game');
//     });
// });
// //edit
// app.get('/game/:id/edit', (req, res)=>{
//     game.findById(req.params.id, (err, foundgame)=>{ //find the game
//         res.render(
//     		'edit.ejs',
//     		{
//     			game: foundgame //pass in found game
//     		}
//     	);
//     });
// });  

// //delete
// app.delete('/game/:id', (req, res)=>{
//     game.findByIdAndRemove(req.params.id, (error,data) => {
//         res.redirect('/game');
//     });
// });

// // game.collection.drop()

// //seed route
// app.get('/game/seed', (req, res) => {
//     game.create(Game, (error, GameArray) => {
//       res.redirect("/game")
//     })
//   })

 

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

// //show route
// app.get('/game/:id', (req, res) => {
//     game.findById(req.params.id, (error, foundgame) => {
//         res.render(
//             'show.ejs',
//             {
//                 game: foundgame
//             }
//         )
//     })
// })


//Class express example(working when comment out all code on top)
// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// let PORT = 3000;
// if(process.env.PORT){
// 	PORT = process.env.PORT
// }

// app.get('/', (req, res)=>{
// 	res.send('hi');
// })

// app.listen(PORT, ()=>{
// 	console.log('listening');
// })

// =======================================
//              LISTENER
// =======================================

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
  });

mongoose.connect('mongodb+srv://NYC_Mat:student@sei.kev6jdn.mongodb.net/?retryWrites=true&w=majority', ()=>{
	console.log('connected to mongo');
})

