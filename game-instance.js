var createGame = require('./game')
var canvas = document.getElementById('main')

canvas.width = 900
canvas.height = 650

module.exports = createGame(canvas)

document.body.appendChild(canvas)
