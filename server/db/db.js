const con = require('./connection')


//functions
//add
function getAllMovies(db=con){
    return db('movies')
}

//post

//patch

//delete

module.exports = {
    getAllMovies
}