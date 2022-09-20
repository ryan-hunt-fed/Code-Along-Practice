const con = require('./connection')


//functions
//add
function getAllMovies(db=con){
    return db('movies')
}

//post
function insertMovie(newMovie, db = con){
    return db('movies')
    .insert(newMovie)
}
//patch

//delete

module.exports = {
    getAllMovies,
    insertMovie,
}