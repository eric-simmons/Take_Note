const router = require('express').Router();
const { notes } = require('../../db/db.json')
const { createNote, editNote, removeNote } = require('../../lib/notes.js')

router.use(notesRoutes);

router.get('./notes', (req,res) =>{
    res.json(notes)
})

router.post('/notes', (req,res) => {
    createNote(req.body, notes);
    res.json(req.body)
})

