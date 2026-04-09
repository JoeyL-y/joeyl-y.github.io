const canvas = document.getElementById("snake_game")
const ctx = canvas.getContext("2d")
const box = 20 // how big the gamme is
let apple = {x:10,y:10}
let skp = [
    {x:10,y:10}
]
function applefunc() {
    apple.x = (Math.random()*20).floor()
    apple.y = (Math.random()*20).floor()
}
let dir;
document.addEventListener('keydown',direction)
function direction(press) {
    let key = press.keyCode
    if (key == 37 && dir!="right") dir="left"
    if (key == 38 && dir!="down") dir="up"
    if (key == 39 && dir!="left") dir="right"
    if (key == 40 && dir!="up") dir="down"
}
// draws game
function draw() {
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < skp.length(); i++) {
    ctx.fillStyle = (i == 0) ? "green" : "white";
    ctx.fillRect(snake[i].x * box, snake[i].y * box, box, box);
  }
}