const path = require('path')
const router = require('express').Router()

//html home route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

//html notes routes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"))
})

module.exports = router;
