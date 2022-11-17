const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000
// const htmlRoutes = require('./routes/htmlRoutes/html.js')
// const apiRoutes = require('./routes/apiRoutes')


const { v4: uuidv4 } = require('uuid');

//allow access to public folder
app.use(express.static('public'))
// app.use('/', htmlRoutes)
// app.use('/api', apiRoutes)








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



