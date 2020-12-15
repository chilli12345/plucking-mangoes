
   
class Stone{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'friction':1,
            'density':1.2,
            'restitution': 0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.r=radius;
        this.image=loadImage("Plucking mangoes/stone.png");
        World.add(world,this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}
