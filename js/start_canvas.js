var canvas = document.getElementById("start_background_canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var lineWidth = 2;
var minRadius = 250;
var maxRadius = 300;

var minSpeed = .1;
var maxSpeed = .3;

var circleAmount = 7;

const circles = [];

intitCircles();
loop();

function intitCircles() {
    for (let i = 0; i < circleAmount; i++) {
        circles[i] = {
            "xPos": getRandomInt(maxRadius, canvas.width - maxRadius),
            "yPos": getRandomInt(maxRadius, canvas.height - maxRadius),
            "radius": getRandomInt(minRadius, maxRadius),
            "xDir": Math.random() * (Math.random() > .5 ? 1 : -1),
            "yDir": Math.random() * (Math.random() > .5 ? 1 : -1),
            "speed": Math.random() * maxSpeed + minSpeed
        };
    }
}

function loop() {
    ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < circleAmount; i++) {
        var c = circles[i];
        draw(c);
        move(c);
    }
    window.requestAnimationFrame(loop);
}

function draw(circle) {
    ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(circle.xPos, circle.yPos, circle.radius, 0, 2 * Math.PI, false);
    
    ctx.fillStyle = "rgba(189, 147, 249, .2)";
    ctx.fill();
}

function move(c) {
    var mag = Math.sqrt(c.xDir * c.xDir + c.yDir * c.yDir);

    c.xPos += (c.xDir / mag) * c.speed;
    c.yPos += (c.yDir / mag) * c.speed;

    if (c.xPos >= window.innerWidth - c.radius || c.xPos <= c.radius) {
        c.xDir *= -1;
    }
    if (c.yPos >= window.innerHeight - c.radius || c.yPos <= c.radius) {
        c.yDir *= -1;
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}