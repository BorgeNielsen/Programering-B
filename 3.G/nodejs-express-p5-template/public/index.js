console.log("scripted loaded")
let clientSocket
let state = 'enterName'

function setup(){
    frameRate(60)
    console.log("setup")
    createCanvas(windowWidth, windowHeight)
    background('purple')
    
    //fetch server ip from node endpoint
    fetch('http://localhost:666/ip')
    .then(res => res.json())
    .then(data => {
        select('#info').html(data.ip)
    })
    //io kommer fra socket.io bibliotektet
    clientSocket = io.connect()
    //'http://' + data.ip + ':' + data.port

    clientSocket.on('newMessage', message => {
        let p = createElement('P', message)
        select('#chat').child(p)
        select('#chat').elt.scrollTop = select('#chat').elt.scrollHeight
    })
    select('#nameButton').mousePressed(()=>{
        console.log('Ny bruger - sendt til server')
        clientSocket.emit('newUser', select('#name').value())
        select('#nameBox').addClass('hide')
        select('#chatBox').removeClass('hide')
    })
}

function draw(){

}

function keyPressed(key){
    if(key.key == 'Enter'){
        let message = select('#message').value()
        //emit tager et emne og noget data
        clientSocket.emit('chat', message)
        select('#message').value('')
    }
}

function mousePressed(){
    
}
/*
function mouseReleased(){
    select('#info').html('sådan skriver man i html')
}

function keyPressed(event){
    select('#info').html('de skrev: ' + event.key)
}
*/