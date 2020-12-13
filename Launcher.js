class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    
    }
    fly(){
        this.shot.bodyA = null;
    }

    attach(body){
       this.shot.bodyA = body;
    }

    display(){
        if(this.shot.bodyA){
       
            var pointA = this.shot.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("black");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
          }
        }
    
    
}