//opret server med express
const express = require('express')
const app = express()
const port = 4444

app.use('/', express.static('public'))

const server = app.listen(port, ()=>{
    console.log('server lytter på addresen: http://localhost:' + port)
})

//opret en socket
const io = require('socket.io')
const serverSocket = io(server)




let players = []
//alt snak med klientenerne sker på connection
serverSocket.on('connection', socket =>{
    //der kommer en ny spiller
    console.log('Ny spiller forsøger at komme ind. Der er i forvejen:' + players.length + 'spillere')
    //vi putter spilleres id ind i players arrayet 
    players.push( {'id':socket.id})
    if(players.length > 2){
        socket.emit('join', false)
        socket.disconnect()
    }else{
        socket.emit('join', true)
    }
})