const router = require('express').Router();
const path = require('path')
const fs = require('fs')
// const { notes } = require('../db/db.json')
const dbPath = path.join(__dirname, '..', 'db', 'db.json')


//get notes from json file
router.get('/notes', (req, res) => {
    fs.readFile(dbPath, 'utf-8', (error, data) => {
        if (error) {
            res.status(500).json({ error: "error" })
            return
        }
        res.json(JSON.parse(data))
    })
})

//post note and add to db.json
router.post('/notes', (req, res) => {
    const { title, text } = req.body

    //gets new note from the req object
    const newNote = {
        ...req.body,
        id: Math.random()
    }


    fs.readFile(dbPath, 'utf-8', (error, data) => {
        if (error) {
            res.status(500).json(err)
            return
        }
        const noteData = JSON.parse(data)
        noteData.push(newNote)
    })



    //update db with new stringified object
    fs.writeFileSync(dbPath, JSON.stringify(noteData), (error) => {
        if (error) {
            res.status(500).json(error)
            return
        }
        res.status(200).json(newNote)
    })
})

//delete route
router.delete('/notes:id', (req, res) => {
    //read notes db
    fs.readFile(dbPath, "utf-8", (error, data) => {
        if(error){
            res.status(500).json(error)
            return
        }
        const { id } = req.params
        let noteData = JSON.parse(data)
        const deletedNote = noteData.find(note => note.id == id)
        //remove note by id
        if(!deletedNote) {
            res.status(400).json({error: "Please provide an Id "})
            return
        }
        else{
            notesData = notesData.filter(note => note.id != id)
        }
        fs.writeFile(dbPath, JSON.stringify(noteData), (error) => {
            if(error){
                res.status(500).json(error)
                return
            }
            res.json(noteData)
        })
      
    })
})

module.exports = router;