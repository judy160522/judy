// Print dimensions - good to keep ratios as variables throughout!
var cardH = 400;
var cardW = Math.round(cardH*1.636); // maintains aspect ratio throughout

// additional bleed and padding %
// use native JavaScript object Math to round - can't have decimals for pixels
var bleedPadW = Math.round(cardW*0.05);
var bleedPadH = Math.round(cardH*0.05);

// dimensions for bleed area
var bleedXmin = 0;
var bleedXmax = cardW + (bleedPadW*2);
var bleedYmin = 0;
var bleedYmax = cardH + (bleedPadH*2);

// dims for centered card area
var cardXmin = 0 + bleedPadW;
var cardXmax = cardW;
var cardYmin = 0 + bleedPadH;
var cardYmax = cardH;

// dims for centered padding area
var padXmin = cardXmin + bleedPadW;
var padXmax = cardXmax - bleedPadW*2;
var padYmin = cardYmin + bleedPadH;
var padYmax = cardYmax - bleedPadH*2;


function setup() {
	createCanvas(bleedXmax, bleedYmax); //width and height of my canvas
	stroke("black");
	rect(bleedXmin, bleedYmin, bleedXmax-1, bleedYmax-1); // minus one to make it visible inside canvas
	stroke("black");
	rect(cardXmin, cardYmin, cardXmax, cardYmax); // centered
	stroke("black");
	rect(padXmin, padYmin, padXmax, padYmax); // centered
	background(0, 51, 102,100);
	noStroke();

	// careful! see textSize is used by p5.js library, so don't name it as a var
	var fontSizeA = Math.round(cardH/6.8);
	fill(0,51,102);
	textSize(fontSizeA);
	textFont("American typewriter")
    text("Business Card", padXmin*2.1+bleedPadW, padYmax*0.3)
	var fontSizeNorm = Math.round(cardH/10); // maintain aspect ratio with text too
	fill(0,0,0);
	textSize(fontSizeNorm);
	text("Judy", padXmin*2.1+bleedPadW, padYmax*0.5);
	fill(32, 32, 32,); // note color values - try to improve with cymk-style colors
	text("Student in ETP", padXmin*2.1+bleedPadW, (padYmax*0.5)+fontSizeA);
	fill(96, 96, 96,); // note 4th value is alpha (transparency)
	text("P: 40-666-888", padXmin*2.1+bleedPadW, (padYmax*0.5)+(fontSizeA*2));
	fill(128, 128, 128,);
	text("E: judy_0522@yahoo.com", padXmin*2.1+bleedPadW, (padYmax*0.5)+(fontSizeA*3));
	fill(32, 32,32,160);
	text("W: person", padXmin*2.1+bleedPadW, (padYmax*0.5)+(fontSizeA*4));
    // Grayscale integer value
    strokeWeight(4);
    stroke(51);
    rect(30,25, 60, 60);
    // integer RGBA notation
     strokeWeight(4);
    stroke(51);
    rect(40,35, 60, 60);
    // integer RGBA notation
    strokeWeight(4);
    stroke(51);
    rect(35,355, 60, 60);
    // integer RGBA notation
    strokeWeight(4);
    stroke(51);
    rect(25,365, 60, 60);
    // integer RGBA notation
    noStroke();
    rect(625, 35, 60, 60);
    noStroke();
    rect(635, 25, 60, 60);
    noStroke();
    rect(625, 355, 60, 60);
    noStroke();
    rect(635, 365, 60, 60);
    noStroke();
    colorMode(HSB, 255);
    var c = color(0, 126, 255);
    quad(400, 31, 100, 20, 69, 63, 30, 76);
    quad(38, 400, 100, 20, 69, 63, 30, 76);
   
    
}

function draw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i] === 1) {
      fill(200);
    } else {
      fill(51);
      noStroke();
      rect(i*w, generation*w, w, w);

    }
  }
  if (generation < height/w) {
    generate();
    
  }


}