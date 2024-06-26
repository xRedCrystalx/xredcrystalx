const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

const FPS = 60;
var STAR_NUM = 150;
var stars = [];
var mouse = { x: 0, y: 0 };

// Initial canvas setup
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Populate stars array
function spawn(STAR_NUM) {
    stars = []
    
    for (let i = 0; i < STAR_NUM; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1 + 1,
            vx: Math.floor(Math.random() * 50) - 25,
            vy: Math.floor(Math.random() * 50) - 25
        });
    }    
}

// Function to draw the stars
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    
    stars.forEach(star => {
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
    });

    ctx.beginPath();
    stars.forEach(starI => {
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        stars.forEach(starII => {
            if (distance(starI, starII) < 150) {
                ctx.lineTo(starII.x, starII.y);
            }
        });
    });
    ctx.lineWidth = 0.12;
    ctx.strokeStyle = "white";
    ctx.stroke();
}

// Function to calculate the distance between two points
function distance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Function to update star positions
function update() {
    stars.forEach(star => {
        star.x += star.vx / FPS;
        star.y += star.vy / FPS;
        
        if (star.x < 0 || star.x > canvas.width) star.vx = -star.vx;
        if (star.y < 0 || star.y > canvas.height) star.vy = -star.vy;
    });
}

// Event listener for mouse movement
canvas.addEventListener("mousemove", function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

// Event listener for window resizing
window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    spawn(Math.floor(canvas.width / 20))

});

// Function to handle the animation frame updates
function tick() {
    draw();
    update();
    requestAnimationFrame(tick);
}

window.dispatchEvent(new Event("resize"));
tick();