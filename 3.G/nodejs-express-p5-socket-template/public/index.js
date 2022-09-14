//opretter en variabel 
let clientSocket

//setup er en funktion der bliver kørt 
function setup(){
    //clinetSocket er sat til io.connect() som bruges til at lave websockets
    clientSocket = io.connect()
    //modtager besked på emnet everybody fra serveren
    clientSocket.on('everybody', message => {
        console.log('Got message from server to all clients: ' + message)
    })
    //modtager en besked på emnet private fra serveren
    clientSocket.on('private', message => {
        console.log('Got private message from server: ', message)
    })
    //modtager en besked på emnet fromServer og sætter #answer til at være den modtagede besked
    clientSocket.on('fromServer', message => {
        console.log('Got reply from server: ', message)
        select('#answer').html(message)
    })
    //p5 bruges til at lave en funktion mousePressed der sender en besked til serverne
    select('#someButton').mousePressed(()=>{
        clientSocket.emit('fromClient', 'Hej med dig server')
    })
}