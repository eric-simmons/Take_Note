const router = require('express').Router();
const path = require('path')
const fs = require('fs')
const { notes } = require('../../db/db.json')
const { createNote, editNote, removeNote } = require('../../lib/notes.js')

router.use(notesRoutes);

router.get('/api/notes', (req,res) =>{
    res.json(notes)
})

router.post('/api/notes', (req,res) => {
    createNote(req.body, notes);
    res.json(req.body)
})


//post note and add to db.json
router.post('/api/notes', (req, res) => {

    console.log(req)
    //gets new note from the req object
    const newNote = req.body
    //push into 'db' array
   notes.push(newNote)
    //update db with new stringified object
    fs.writeFileSync(__dirname, '../db/db.json', JSON.stringify(notes))

    res.json(notes)
})

module.exports = router;