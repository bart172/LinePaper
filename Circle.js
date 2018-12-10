function Circle() {
  this.x = -10;
  this.y = -10;
  this.dim = 3;
  
  this.dx = Math.random(-2, 2);
  this.dy = Math.random(-2, 2);
  
  this.move = function() {
    this.x+=this.dx;
    this.y+=this.dy;
  };
  
  this.restart = function() {
    if (this.x > width) {
      this.x = 0;
      this.y = random(width);
      this.dx = random(0, 2);
      this.dy = random(-2, 2);
      this.dim = random(2, 10);
    }
    
    if (this.x < 0) {
      this.x = width;
      this.y = random(width);
      this.dx = random(-2, 0);
      this.dy = random(-2, 2);
      this.dim = random(2, 10);
    }
    
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
      this.dx = random(-2, 2);
      this.dy = random(0, 2);
      this.dim = random(2, 10);
    }
    
    if (this.y < 0) {
      this.y = height;
      this.x = random(width);
      this.dx = random(-2, 2);
      this.dy = random(-2, 0);
      this.dim = random(2, 10);
    }
  };
  
  this.draw = function() {
    noStroke();
    ellipse(this.x, this.y, this.dim);
    this.move();
    this.restart();
  }
  
  
}
