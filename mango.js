class mango {
    constructor(x,y,d){
            var options={
               
                isStatic:true
                
            }

            this.body=Bodies.circle(x,y ,d,options)
            this.img=loadImage("mango.png")
            this.d=d
            World.add(world,this.body)
    }

        display(){
            push( )
            translate(this.body.position.x,this.body.position.y)
            imageMode(CENTER)
            image(this.img,0,0,this.d,70)
            pop()

        }


}