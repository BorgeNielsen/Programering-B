//opretter en variable der indeholder express objektet
const express = require('express')
// initialisere app objeketet som bruger express
const app = express()
//laver en const der er et tal som vi bruger som vores port
const port = 4000
//server en statisk mappe i roden af serveren
app.use('/', express.static('public'))
//starter serveren og lytter på vores const port
const server = app.listen(port, () => {
  console.log('App listening on http://localhost:' + port)
})
//henter biblioteket socket.io som vi bruger til at lave websocket
const io = require("socket.io")
//laver en const som bruger io funktionen til at initialisere websockets
const serverSocket = io(server)

//serveren lytter efter connections. socket = brugeren
serverSocket.on('connection', socket => {
  //logger socket idet
  console.log('a user connected ' + socket.id)
  //serveren sender en besked ud til en bruger ved emit på emnet private
  socket.emit('private', 'Her er en privat besked med dit id ' + socket.id)
  //serverSocket.emit sender en besked ud til alle brugere der er tilsluttet serveren
  serverSocket.emit('everybody', 'Vi fik en ny klient med id ' + socket.id)
  //serveren broadcaster. Sender en besked ud til alle brugerne undtaget den bruger beskeden kom fra
  socket.broadcast.emit('everybody else', 'Besked fra den nye socket id ' + socket.id)
  //lytter på clineterne på emnet "fromClient" og modtager deres besked som bliver logget og emiter det
  socket.on('fromClient', message => {
    console.log('Modtog besked: ' + message + ' på emnet fromClient')
    socket.emit('fromServer', 'Besked modtaget, tak for det.')
  })
})