let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from(PIXI.Texture.WHITE);
sprite.width = 50;
sprite.height = 50;
app.stage.addChild(sprite);

var buffer = 2;

var spritePosX = 200;
var spritePosY = 140;

var directionX = 1;
var directionY = 1;

let elapsed = 0.0;
app.ticker.add((delta) => {

    elapsed += delta;

    spritePosX += Math.cos(45) * directionX * buffer * delta;
    spritePosY += Math.sin(45) * directionY * buffer * delta;

    if (spritePosY + 50 > 360) {
        directionY = -1;
    }
    else if (spritePosY < 0)
    {
        directionY = 1;
    }

    if (spritePosX + 50 > 640) {
        directionX = -1;
    }
    else if (spritePosX < 0)
    {
        directionX = 1;
    }

    sprite.x = spritePosX;
    sprite.y = spritePosY;
});