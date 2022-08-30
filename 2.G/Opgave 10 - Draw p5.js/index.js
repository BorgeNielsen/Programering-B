console.log("scripted loaded")

function setup(){
    frameRate(60)
    console.log("setup")
    createCanvas(windowWidth, windowHeight)
    background('lightgray')
}

function draw(){
    select('#info').html(frameCount % 60)

    let xColor = map(mouseX, 0, windowWidth, 0, 255)
    let yColor = map(mouseY, 0, windowHeight, 0, 255)
    let fColor = map(frameCount % 60 * 4 , 0, 255, 0, 255)

    stroke(xColor, yColor, fColor)
    noFill()
    ellipse(mouseX, mouseY, frameCount % 60 * 2)
}