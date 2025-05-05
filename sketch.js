let discoBalls = [];
let timer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  clear();
  timer++;

  if (timer % 180 === 0) {
    discoBalls.push({
      x: random(width),
      y: -20,
      speed: random(0.5, 1.5),
      size: random(20, 36)
    });
  }

  for (let i = discoBalls.length - 1; i >= 0; i--) {
    let b = discoBalls[i];
    textSize(b.size);
    fill(255, 255, 255, 200); // Less transparent now
    text("🪩", b.x, b.y);
    b.y += b.speed;

    if (b.y > height + 50) {
      discoBalls.splice(i, 1);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
