const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const playerImg = new Image();
playerImg.src = "https://static.vecteezy.com/system/resources/previews/015/577/202/original/smiling-face-in-sunglasses-large-size-of-yellow-emoji-smile-free-vector.jpg";

const goalImg = new Image();
goalImg.src = "https://em-content.zobj.net/thumbs/120/apple/354/mushroom_1f344.png";

const winSound = document.getElementById("winSound");

let player = {
    x: 20,
    y: 40,
    size: 50,
    speed: 10
};

let goal = {
    x: 620,   // помістила у межі canvas
    y: 500,
    size: 50
};

// СТІНИ
const walls = [
    { x: 100, y: 0, width: 20, height: 500 },
    { x: 200, y: 100, width: 400, height: 20 },
    { x: 300, y: 200, width: 20, height: 400 },
    { x: 0,   y: 580, width: 700, height: 20 }, // адаптовано під 700px
    { x: 600, y: 0,   width: 20, height: 300 }
];

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Малюємо стіни
    ctx.fillStyle = "black";
    walls.forEach(wall => {
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

    // Гравець
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);

    // Фініш
    ctx.drawImage(goalImg, goal.x, goal.y, goal.size, goal.size);
}


// Перевірка виграшу
function checkWin() {
    if (
        player.x < goal.x + goal.size &&
        player.x + player.size > goal.x &&
        player.y < goal.y + goal.size &&
        player.y + player.size > goal.y
    ) {
        document.getElementById("message").innerHTML = "Voitit!";
        winSound.play();
        document.removeEventListener("keydown", movePlayer);
    }
}


// Перевірка зіткнення зі стіною
function isCollidingWithWall(newX, newY) {
    return walls.some(wall => {
        return (
            newX < wall.x + wall.width &&
            newX + player.size > wall.x &&
            newY < wall.y + wall.height &&
            newY + player.size > wall.y
        );
    });
}


// Рух
function movePlayer(e) {
    let newX = player.x;
    let newY = player.y;

    switch(e.key) {
        case "ArrowUp":
            newY -= player.speed;
            break;
        case "ArrowDown":
            newY += player.speed;
            break;
        case "ArrowLeft":
            newX -= player.speed;
            break;
        case "ArrowRight":
            newX += player.speed;
            break;
    }

    if (newX < 0) newX = 0;
    if (newY < 0) newY = 0;
    if (newX + player.size > canvas.width) newX = canvas.width - player.size;
    if (newY + player.size > canvas.height) newY = canvas.height - player.size;

    if (!isCollidingWithWall(newX, newY)) {
        player.x = newX;
        player.y = newY;
    }

    drawGame();
    checkWin();
}

playerImg.onload = function() {
    drawGame();
    document.addEventListener("keydown", movePlayer);
};