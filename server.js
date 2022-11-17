const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
const db = require('./db/db.json')
// const htmlRoutes = require('./routes/htmlRoutes/html.js')
// const apiRoutes = require('./routes/apiRoutes')

// const { v4: uuidv4 } = require('uuid');

//allow access to public folder
app.use(express.static('public'))
app.use(express.json())
// app.use('/', htmlRoutes)
// app.use('/api', apiRoutes)

//post note and add to db.json
app.post('/api/notes', (req, res) => {

    console.log(req)
    //gets new note from the req object
    const newNote = req.body
    //push into 'db' array
   notes.push(newNote)
    //update db with new stringified object
    fs.writeFileSync(__dirname, '../db/db.json',
        JSON.stringify(notes))

    res.json(notes)
})



//html home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})


//html notes routes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"))
})




//listening to front end
app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})



