function Circle() {
	
	/* I'm putting in dummy values as P5Js for some weird reason doesn't allow for 
		 random values into definitions before setup is created. */
	
  this.x = 0;
  this.y = 0;
  this.dim = 0;
  this.dx = 0;
  this.dy = 0;
  
	/* function to move the circles around */
  this.move = function() {
    this.x+=this.dx;
    this.y+=this.dy;
  };
  
	/* function to reset the all the values of a circle as soon as it hits a border */
  this.restart = function() {

    if (this.x > width+dis) {
      this.x = -dis;
      this.y = random(-dis, height+dis);
      this.dx = random(0, 2);
      this.dy = random(-2, 2);
      this.dim = random(2, 10);
    }
    
    if (this.x < -dis) {
      this.x = width+dis;
      this.y = random(-dis, height+dis);
      this.dx = random(-2, 0);
      this.dy = random(-2, 2);
      this.dim = random(2, 10);
    }
    
    if (this.y > height+dis) {
      this.y = -dis;
      this.x = random(-dis, width+dis);
      this.dx = random(-2, 2);
      this.dy = random(0, 2);
      this.dim = random(2, 10);
    }
    
    if (this.y < -dis) {
      this.y = height+dis;
      this.x = random(-dis, width+dis);
      this.dx = random(-2, 2);
      this.dy = random(-2, 0);
      this.dim = random(2, 10);
    }
  };
  
	/* display function */
  this.display = function() {
    noStroke();
    ellipse(this.x, this.y, this.dim);
    this.move();
    this.restart();
  }
  
  
}

var items = [];
var num = 150;		//number of items on screen
var dis = 100;		//minimum distance for the line to appear

var wdth = 800;		//canvas width
var heigh = 800;	//canvas height



function setup() {
  createCanvas(wdth, heigh);
	
	/* create the various items and fill in the random values */
	for (var i = 0; i<num; i++) {
		items.push(new Circle());
		items[i].x = random(width);
		items[i].y = random(height);
		items[i].dx = random(-2, 2);
		items[i].dy = random(-2, 2);
		items[i].dim = random(3);
	}
}

function draw() {
  background(10, 10, 90);
  
	/* display the items */
  for (var i = 0; i<num; i++) {
    items[i].display();
  }
  
	/* calculate and draw the lines */
  for (var i = 0; i<num; i++) {
    for (var j = 0; j<num; j++) {
			
      if(dist(items[i].x, items[i].y, items[j].x, items[j].y) <= dis) {
        strokeWeight(3);
        stroke(255, 255-dist(items[i].x, items[i].y, items[j].x, items[j].y)/dis*255);
        line(items[i].x, items[i].y, items[j].x, items[j].y);
      }
			
    }
  }
}
