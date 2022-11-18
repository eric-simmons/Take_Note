
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')
// const db = require('../db/db.json')

//allow access to public folder
app.use(express.static('public'))
app.use(express.json())
app.use(routes)



//listening to front end
app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
})





