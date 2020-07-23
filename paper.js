class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.paper = loadImage("paper.png")
      this.body = Bodies.circle(x, y, 70, options);
      //this.width = 50;
      //this.height = 50;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //pos.x = mouseX;
      //pos.y = mouseY;
      var angle = this.body.angle;
      push();
      image(this.paper, this.body.position.x, this.body.position.y, 80, 80)
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("white");
      this.visibility = 0;
      ellipse(50, 10, this.width, this.height);
      pop();
      
      
  }
 }

