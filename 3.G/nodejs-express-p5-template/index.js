console.log('new node app is running')
let colors = ['red', 'blue', 'green','purple']
//hent biblioteket ip
const ip = require('ip')
console.log('Dette er din ip:' + ip.address())
//hent biblioteket socket.io for at lave en websocket
const socLib = require('socket.io')
//vælg en port 
const port = 666
//opret en variable som holder express biblioteket
const express = require('express')
//inatialiser app objektet
const app = express()
//json array til brugere
let users = []
//start serveren og lyt på din port
const server = app.listen(port, ()=>{
    console.log('Serveren kører på:' + port)
})
//oprette en server websocket
const serverSocket = socLib(server)
app.use('/', express.static('public'))
//opret et endpoit der sender ip
app.get('/ip', (req, res)=>{
    res.json(
        {
            'ip' : ip.address(),
            'port': port,
        }
    )
})

serverSocket.sockets.on('connection', (socket)=>{
    console.log('new socket connection established')
    //socket.on er en evnet listener på nye beskeder fra klienter
    socket.on('chat', message => {
        console.log(message)
        //når serveren modtager beskeder sender den dem rundt til all
        serverSocket.sockets.emit('newMessage', message)
    })
    socket.on('newUser', user =>{
       users.push({'name':user, 'id':socket.id})
       console.log(users)
    })
})
