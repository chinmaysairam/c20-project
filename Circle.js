class Circle  {
  constructor(x, y, radius) {
    
    this.body = Bodies.circle(x, y, radius );
  this.radius=radius
  World.add(world,this.body);
  }
  display() {
  var pos=this.body.position
  var angle=this.body.angle
  push();
  translate(this.body.position.x,this.body.position.y)
  
  

   ellipseMode(RADIUS);
fill("brown");
ellipse(pos.x,pos.y,this.radius)
pop();
  }
}
