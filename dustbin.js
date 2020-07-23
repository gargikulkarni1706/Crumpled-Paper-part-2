class Dustbin {
    constructor(x, y) {
      var options = {
           isStatic: true,
          'restitution':0.3,
          'friction':3.0,
          'density':1.7
      }
      this.image = loadImage("dustbingreen.png");
      this.body = Bodies.rectangle(x, y, height, width, options);
      this.width = 200;
      this.height = 20;
      //Matter.Body.setAngle(this.body, angle);
      
      World.add(world, this.body);
    }
    display(){
      image(this.image, this.body.position.x, this.body.position.y, 150, 150);
      //this.image.scale = 0.2;
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(0);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };