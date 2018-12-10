var items = [];
var num = 200;
var dis = 100;

for (var i = 0; i<num; i++) {
  items.push(new Circle());
}
function setup() {
  createCanvas(screen.width, screen.height);
}

function draw() {
  background(10, 10, 90);
  
  for (var i = 0; i<num; i++) {
    items[i].draw();
  }
  
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
