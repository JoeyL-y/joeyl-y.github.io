const canvas = document.getElementById("snake_game")
const ctx = canvas.getContext("2d")
const box = 20 // how big the gamme is (in movable squares)
// DO NOTE THAT THE GAME IS 100PX
let apple = {x:10,y:10}
let skp = [
    {x:2,y:10},
    {x:3,y:10},
    {x:4,y:10}
]
function applefunc() {
    apple.x=Math.floor(Math.random()*20)
    apple.y=Math.floor(Math.random()*20)
}
let dir = "right";
document.addEventListener('keydown',direction)
function dircalc(key) {
    if (key == 37 && dir!="right") {return "left"}
    if (key == 40 && dir!="down") {return "up"}
    if (key == 39 && dir!="left") {return "right"}
    if (key == 38 && dir!="up") {return "down"}
    return dir
}
function direction(press) {
    let key = press.keyCode
    if (buffer=1) {
        
        dir=dircalc(key)
        
        buffer=0
    }
}
function restart() {
    apple={x:10,y:10}
    buffer = 0
    skp = [
    {x:2,y:10},
    {x:3,y:10},
    {x:4,y:10}
    ],
    dir = "right";
}
// draws game
function draw() {
    ctx.fillStyle = "#111133"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // snake
    ctx.fillStyle = "#337733"
    for (let i = 0; i < skp.length; i++) {
        
        ctx.fillRect(skp[i].x * 5, skp[i].y * 5, 5,5);
    }
    // food
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x*5,apple.y*5,5,5);

    
    

}
function calcnewloc() {

    let newp=Object.assign({},skp[skp.length-1]);
        switch (dir) {
            
            case "right":{
                
                newp.x=newp.x+1
                return newp
            }
            case "left":{
                
                newp.x=newp.x-1
                return newp
            }

            case "up":{
                
                newp.y=newp.y+1
                return newp
            }
            case "down":{
                
                newp.y=newp.y-1
                return newp
            }
        }
}
function game() {
    
    skp.shift()
    // movemenet of snake
    skp.push(calcnewloc())

    // snake eats apple
    if (skp.some(obj =>
        obj.x === apple.x && obj.y === apple.y
    )) {applefunc();skp.push(calcnewloc())}
}

const snaiklop = setInterval(() => {
    game()
    draw()
    buffer=1
}, 170);