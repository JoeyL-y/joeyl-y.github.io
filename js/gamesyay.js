
const intervalId = setInterval(() => {
    let color = [Math.random()*255,Math.random()*255,Math.random()*255]
document.getElementById("games").style.color="rgb("+color.join(",")+")"
}, 100);