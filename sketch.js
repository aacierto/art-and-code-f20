/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight); // windowWidth/Height define the width and height of your browser window
  //you could also put actual pixels here as well, it just depends on what you want
  // Put setup code here
}

function draw() {
  // Put drawings here
  fill(234, 240, 81); // 3 values separated by commas denote RGB values
  noStroke();
  rect(50, 50, 600, 700); // (x-location, y-location, width in pixels, height in pixels)
  fill(255); // single values between 0-255 describe greyscale tones
  textStyle(BOLD); // type style
  textSize(120); // type size
  text("matter is the minimum", 50, 150, 500, windowHeight);

  /*
we'll use this next section to make our own shapes using a handful of primatives.
- lets apply our collectively written shared values. 
- Design an engaging page using that text
- include some sort of interaction (a mousepressed, a mouseX/mouseY movement of a primative)

*/
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
