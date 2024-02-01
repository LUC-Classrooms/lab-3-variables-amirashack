/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var x = 100;
var d = 20;

function setup() {
  createCanvas(400, 300); // creates a drawing canvas
}

function draw() {
  // background is drawn first
  background(200); // light gray

  // call a simple P5 drawing function, such as ellipse() using your new variable(s) in place of arguments
  ellipse(x, 100, d, d);
  ellipse(x, 150, d, d);
  ellipse(x, 200, d, d);
  
}
