console.log('Balls!')
class Ball{
    constructor(radius, xpos, ypos, col, name){
        this.name = name
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos
        this.col = col

        this.gravity = 1
        this.friction = 1 - this.radius /1000
        this.velocity = 0
        this.updrift = 25
        this.button = createButton(this.name)
    }

    show(){
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            if(confirm('Vil du hoppe med' + this.name)){
                this.up()
            }else{
                this.radius -=5
            }
        })
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity

            if(this.ypos > height - this.radius){
                this.ypos = height - this.radius
                this.velocity = -this.velocity
            }
    }

    up(){
        this.velocity -= this.updrift
    }
}