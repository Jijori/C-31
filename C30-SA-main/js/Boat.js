class Boat {
  constructor(x, y, width, height, boatPos) {
    var options = {
      //giving properties to the boat
      restitution:0.8,
      friction:1.0,
      density:1.0,
    };

    this.width = width;
    this.height = height;

    //giving the position of the boat
    this.boatPosition = boatPos; 

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);

    //load the image
    this.image = loadImage("assets/boat.png");
  }

  display() {
    //name spacing
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    fill("brown");
    
    //change to image instead of rect
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition ,this.width, this.height);
    pop();
  }
}
