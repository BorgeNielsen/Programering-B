console.log("scripted loaded")

function setup(){
    frameRate(60)
    console.log("setup")
    createCanvas(windowWidth, windowHeight)
    background('purple')
    select('#info').html('sådan skriver man i html')
}

function draw(){

    
}

function mousePressed(){
    select('#info').html('SOVS SOVS SOVS SOVS SOVS SOVS')
}

function mouseReleased(){
    select('#info').html('sådan skriver man i html')
}

function keyPressed(event){
    select('#info').html('de skrev: ' + event.key)
}