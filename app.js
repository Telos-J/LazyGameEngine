const img = new Image()
document.querySelector('.sprite').addEventListener('change', function() {
    if (this.files && this.files[0]) {
        img.src = URL.createObjectURL(this.files[0]);
        img.onload = imageIsLoaded;
    }
});

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')
let col = 1
let row = 1

function imageIsLoaded() { 
   start()
}

function update() {
   col = document.querySelector('.col').value
   row = document.querySelector('.row').value
}
 
function render() {
    context.fillStyle = "white"
    context.fillRect(0,0,canvas.width, canvas.height)
    context.drawImage(img,0,0,img.width/col,img.height/row,0,0,canvas.width,canvas.height)
}

function start() {
    update()
    render()
    requestAnimationFrame(start)
}