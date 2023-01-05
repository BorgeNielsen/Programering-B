//opret server med express
const express = require('express')
const app = express()
const port = 4444
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter på adressen: http://localhost:' + port)
})
//opret en socket 
const io = require('socket.io')
const serverSocket = io(server)

let players = []

let numPlayers = 0
let numNames = 0
let numChoice = 0

//Der kommer en ny klient - og serveren møder den her
serverSocket.on('connection', socket => {
    console.log('ny spiller, id: ' + socket.id)
    numPlayers++
    console.log('Der er nu: ' + numPlayers + ' spillere')

    //er der plads til flere spillere 
    if(numPlayers <= 2){
        //hvis ja så lægger vi spillere i arrayet 
        players[socket.id] = {
            'id': socket.id
        }
        // og sender en besked om han/hun/hen er inde
        socket.emit('welcome', true)
    }else{
        //ellers sender vi en afvisning og disconnecter denne socket
        console.log('Der var ikke plads, vi smidder dem ud igen') 
        socket.emit('welcome', false)
        //vi skal lige huske at tælle en spiler mindre
        numPlayers--
        console.log('Nu er der: ' + numPlayers + ' tilbage')
        //og disconecter denne socket
        socket.disconnect()
    }

    //når vi modtager navne fra spilleren
    socket.on('name', message => {
            //lægger vi en egenskab "name" til spillere i arrayet
        players[socket.id].name = message
        numNames++
        if(numNames == 2){
            serverSocket.emit('play', true)
        }
    })

    socket.on('disconnect', socket => {
        numPlayers--
        console.log('ups der var en spiller der smuttede')
        console.log('Nu er der ' + numPlayers + ' tilbage')
        //fjerne denne spiller fra arrayet med spillere
        players = players.filter( p => p.id != socket.id)
    })
})
