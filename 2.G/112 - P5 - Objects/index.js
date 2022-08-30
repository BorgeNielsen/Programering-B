console.log("scripted loaded")

let students = ['Andreas', 'Theis', 'Palme', 'Fredrik', 'Viktor', 'Mie', 'Marius', 'Sofus', 'Bjarke', 'Nagib', 'Emil']
let balls = []

function setup(){
    createCanvas(400, 400)
    background("purple")
    students.map(item =>{
        let b = new Ball(random(10, 40), random(width), random(height), 'red', item)
        console.log(b)
        balls.push(b)
    })
    
}

function draw(){
    background('purple')
    balls.map(item =>{
        item.show()
        item.update()
    })
    
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}