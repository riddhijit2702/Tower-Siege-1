class Box3{
    constructor(x,y,width,height){
        var options={

            restitution : 0.5,
            friction: 0.2,
            
         
          }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width =width;
        this.height =height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("#1CA773");
        strokeWeight(4);
        fill("#FF9055");
        rect(0,0,this.width,this.height);
        pop();
    }
}
