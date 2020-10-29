const img = new Image();
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
let col = 1;
let row = 1;
let step = 0;

document.querySelector('.sprite').addEventListener('change', function () {
    if (this.files && this.files[0]) {
        img.src = URL.createObjectURL(this.files[0]);
        img.onload = imageIsLoaded;
    }
});

document.querySelector('.col').addEventListener('change', function () {
    col = document.querySelector('.col').value;
    step = 0;
});

document.querySelector('.row').addEventListener('change', function () {
    row = document.querySelector('.row').value;
    step = 0;
});

function imageIsLoaded() {
    start();
}

function update() {
    step += img.width / col;
    if (step >= img.width) step = 0;
}

function render() {
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
        img,
        step,
        0,
        img.width / col,
        img.height / row,
        0,
        0,
        canvas.height,
        canvas.height
    );
}

function start() {
    update();
    render();
    requestAnimationFrame(start);
}
