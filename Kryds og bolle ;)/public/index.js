let clientSocket
let currentPage = '#lobby'
let nameInput, nameButton, playerName, lobbyText, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8, tile9, winner, restartButton
let krydsbolle

function setup(){
  noCanvas()
  //log på serveren 
  clientSocket = io.connect()
  initVars()

    //håndter valg
    //sellectAll tiles for at give dem alle en eventlistener
    let tiles = selectAll(".tiles")
      tiles.map(t =>{
        t.mousePressed(()=>{
          console.log(t.elt.id)
          let tid = t.elt.id
          clientSocket.emit('move', t.elt.id)

          clientSocket.on('xo', xo =>{
              let krydsbolle = xo
              console.log(krydsbolle)
          })

          //modtag træk fra serveren
          clientSocket.on('move', players =>{
          console.log('fik træk fra server hallæj', players)
            select(players.move).addClass(players.role)
            console.log(select(players.move), 'jeg')

         })

        })
      })
      //spillerens valg skal senedes til serveren der håndtere det
      
  shiftPage('#play')
  

  //få besked om du er med eller om du må vente
  clientSocket.on('join', ok => {
    if(ok){
      console.log('got ok to join, showing namepage')
      shiftPage('#play')
    }else{
      shiftPage('#reject')
    }
  })



  //håndter navn
  nameButton.mousePressed(()=>{
    if(nameInput.value() != ''){
      clientSocket.emit('name', nameInput.value())
      myName.html(nameInput.value())
      lobbyText.html('Venter på spillere')
      shiftPage('#lobby')
    }else{
      confirm('indtast et navn')
    }
    
    //start spil
    clientSocket.on('play', () => {
      console.log('got play, starting game')
      shiftPage('#play')
    })
    
  
    
    //vis resultat
    clientSocket.on('result', w => {
      console.log('got result, winner is ', w)
      winner.html(w)
      shiftPage('#result')
      restartButton.mousePressed(()=>clientSocket.emit('restart'))
    })
  })
}

function shiftPage(pageId){
  select(currentPage).removeClass('show')
  select(pageId).addClass('show')
  currentPage = pageId
}

function initVars(){
  nameInput = select('#nameInput')
  nameButton = select('#nameButton')
  playerName = select('#playerName')
  lobbyText = select('#lobbyText')
  //tiles - de ni felter
  tile1 = select('#tile1')
  tile2 = select('#tile2')
  tile3 = select('#tile3')
  tile4 = select('#tile4')
  tile5 = select('#tile5')
  tile6 = select('#tile6')
  tile7 = select('#tile7')
  tile8 = select('#tile8')
  tile9 = select('#tile9')
  winner = select('#winner')
  restartButton = select('#restartButton')
}

