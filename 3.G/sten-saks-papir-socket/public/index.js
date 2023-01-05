let clientSocket

function setup(){
    noCanvas()
    //log på serveren
    clientSocket = io.connect()
    //få besked om du er med eller om du må vente
    clientSocket.on('join', ok => {
        if(ok){
            select('#name').addClass(('show'))
        }else{
            select('#reject').addClass(('show'))
        }
    })
}

function draw(){

}