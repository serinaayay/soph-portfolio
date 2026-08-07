const bg = document.getElementById('grid-bg');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let gradientX = mouseX;
let gradientY = mouseY;

// Track the cursor position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animation loop for fluid movement
function animate() {
    const speed = 0.03;

    gradientX += (mouseX - gradientX) * speed;
    gradientY += (mouseY - gradientY) * speed;

    bg.style.setProperty('--mouse-x', `${gradientX}px`);
    bg.style.setProperty('--mouse-y', `${gradientY}px`);

    requestAnimationFrame(animate);
}

// Start the loop
animate();