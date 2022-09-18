const express = require('express')
const router = express.Router()

const db = require('../db/db')


router.get('/', async (req,res) => {
    try{

        const movieArr = await db.getAllMovies()
        res.json(movieArr)
    }
    catch (err) {
        res.status(500).json({ msg: err.message })
    }
   

})


module.exports = router