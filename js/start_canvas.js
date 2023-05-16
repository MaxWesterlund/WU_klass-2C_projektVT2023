var canvas = document.getElementById("start_background_canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lineWidth = 2;
var minRadius = 200;
var maxRadius = 300;

var circleAmount = 7;

const circles = [];

intitCircles();
loop();

function intitCircles() {
    for (let i = 0; i < circleAmount; i++) {
        circles[i] = {
            "x": getRandomInt(0, window.innerWidth),
            "y": getRandomInt(0, window.innerHeight),
            "r": getRandomInt(minRadius, maxRadius)
        };
    }
}

function loop() {
    for (let i = 0; i < circleAmount; i++) {
        draw(circles[i]);
        circles[i].x += 1;
    }
    window.requestAnimationFrame(loop);
}

function draw(circle) {
    for (let i = 0; i < circleAmount; i++) {
        ctx = canvas.getContext("2d");

        ctx.lineWidth = 10;
    
        ctx.beginPath();
    
        ctx.arc(circle.x, circle.y, circle.r, 0, 2 * Math.PI, false);
        
        ctx.fillStyle = "rgba(189, 147, 249, .2)";
        ctx.fill();
    
        ctx.strokeStyle = "rgb(189, 147, 249)"
        ctx.stroke();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}