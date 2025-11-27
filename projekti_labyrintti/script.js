const canvas = document.getElementById("mazeCanvas");
const ctx = canvas.getContext("2d");

const playerImg = new Image();
playerImg.src = "https://static.vecteezy.com/system/resources/previews/015/577/202/original/smiling-face-in-sunglasses-large-size-of-yellow-emoji-smile-free-vector.jpg";

const goalImg = new Image();
goalImg.src = "https://images.bisnis.com/posts/2023/09/18/1695925/emoji_kitchen_1695018759.jpg";

const winSound = document.getElementById("winSound");

let player = {
    x: 20,
    y: 40,
    size: 50,
    speed: 10
};

let goal = {
    x: 730,
    y: 20,
    size:50
};


function drawGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(playerImg, player.x, player.y, player.size, player.size);
    ctx.drawImage(goalImg, goal.x, goal.y, goal.size, goal.size);
}

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

function movePlayer(e) {
    switch(e.key) {
        case "ArrowUp":
            player.y -= player.speed;
            break;
            case "ArrowDown":
                player.y += player.speed;
                break;
                case "ArrowLeft":
                    player.x -= player.speed;
                    break;
                    case "ArrowRight":
                        player.x += player.speed;
                        break;
        
    }
    drawGame();
    checkWin();
}

playerImg.onload = function() {
    drawGame();
    document.addEventListener("keydown", movePlayer);
};