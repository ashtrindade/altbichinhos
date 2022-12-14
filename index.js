const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const data = require('./data/data').data

// API Homepage
app.get('/', (req, res) => {
    res.json('Welcome to the Alt Pets API! A collection of pet images with alt text!')
})

// All languages Endpoint
app.get('/all', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let portuguese = data[pet].portuguese
    let english = data[pet].english
    let spanish = data[pet].spanish
    let german = data[pet].german

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        portuguese: portuguese,
        english: english,
        spanish: spanish,
        german: german,
    })

    res.json(random)
})

// Portuguese Endpoint
app.get('/pt', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let portuguese = data[pet].portuguese

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: portuguese

    })

    res.json(random)
})

// English Endpoint
app.get('/en', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let english = data[pet].english

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: english,
    })

    res.json(random)
})

// Spanish Endpoint
app.get('/es', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let spanish = data[pet].spanish

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: spanish,
    })

    res.json(random)
})

// German Endpoint
app.get('/de', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let german = data[pet].german

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: german,
    })

    res.json(random)
})

// Run app
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))