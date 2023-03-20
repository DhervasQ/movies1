const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        director: {type: String, required: true},
        year: {type: Number, required: true},
        genre: {type: String, required: true},
    
    },{
        timestamps: true
    }
)


//Generamos el modelo de nuestra entidad en base a nuestro Schema
const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;