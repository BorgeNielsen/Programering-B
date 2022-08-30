let lukas, viktor

let students = ['mie', 'bjarke', 'bjørn', 'marius', 'lukas','frederik', 'sofus', 'theis', 'viktor', 'andreas']
let balls = []

function setup(){
    noCanvas()
    students.map( (item, index) => {
        let b = new Ball(random(10, 40), random(window.innerWidth), random(window.innerHeight), 'red', item)
        balls.push(b)
    })

}

function draw(){
    background('purple')
    balls.map( item => {
        item.show()
        item.update()
    })
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => item.up())
    }
}
