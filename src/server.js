//const { response } = require('express')
// dependencias
const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages.js')

// servidor
server

.use(express.urlencoded({ extended: true }))

.use(express.static('public'))

// configurar TemplateEngine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

// rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

server.listen(5500)