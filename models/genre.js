const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const mongoose = require('mongoose');

// create application/json parser
const jsonParser = bodyParser.json()



// Create schema for MongoDB
const genreSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});

const Genre = mongoose.model('Genra', genreSchema);


// START: REST API AND CRUDE OPERATOR FOR MongoDB and testing in POSTMAN

// Get All Genres
router.get('/', (req, res) => {
    async function getGenres(){
        const genres = await Genre.find();
        res.send(genres);
        // console.log(genres);
    }
    getGenres();
});

// Get Genres By Id
router.get('/:id', (req, res) => {
    async function getGenre(id){
        try{
            const genre = await Genre.findById(id);
            res.send(genre);
            // console.log(genre);
        }
        catch (ex) {
            console.log("Error on id: ");
            console.log(ex.message);
        }
    }
    
    // getGenre('5c2393a90bce6edef2d11a62');
    getGenre(req.params.id);
});

// Insert to Genre
router.post('/', jsonParser, (req, res) => {
    async function createGenre(){
        const genre = new Genre( { name: req.body.name } );
    
        try{
            const result = await genre.save();
            console.log(result);
            res.send(result);
        }
        catch (ex) {
            console.log(ex.message);
        }
    }
    createGenre();
});

// Delete from Genre
router.delete('/:id', (req, res) => {
    async function deleteGenre(id){
        const result = await Genre.deleteOne( {_id: id} );
        console.log(result);
        res.send(result);
    }
    deleteGenre(req.params.id);
});

// Update to Genre by Id
router.put('/:id', jsonParser, (req, res) => {
    async function updateGenre(id){
        const genre = await Genre.findById(id);
        if(!genre) return;
    
        genre.name = req.body.name;
    
        const result = await genre.save();
        // console.log(result);
        res.send(result);
    }
    updateGenre(req.params.id);
});

// END: REST API AND CRUDE OPERATOR FOR MongoDB and testing in POSTMAN

// Export all of get, post, put, delete, get by id through router
module.exports = router;