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

router.post('/', async (req,res) => {
    try{
        // console.log('POST ROUTE:', req.body)
       const idArr = await db.insertMovie(req.body) 
       
       const newObj = {
            id: idArr[0],
            ...req.body,
            watched: false
       }
       res.json(newObj)
    }
    catch(err) {
        res.status(500).json({ msg: err.message })
    }
})


module.exports = router