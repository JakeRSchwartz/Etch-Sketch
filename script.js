let grid = document.querySelector('.grid');
var pixel = document.querySelector('#slider');
var color = 'black'
const userColor = document.querySelector('#input-color');
const eraser = document.querySelector('.eraserBtn') ;
const rainbow = document.querySelector('.rainbow');
const clear = document.querySelector('.clearBtn');
var mouseisDown = false;
function createGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    totalSize = size * size;
    for(let i = 0; i < totalSize; i++){
        let gridBox = document.createElement('div');
        gridBox.style.backgroundColor = 'white';
        grid.insertAdjacentElement('beforeend', gridBox);
}
var gridBox = grid.querySelectorAll('div');
gridBox.forEach(grid => grid.addEventListener('mouseover', colorGrid))
}
function gridSize() {
    let squares = grid.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    createGrid(pixel.value);
}

function userColorSelection(e){
  color = e.target.value;
}
function eraseColor(){
    color = 'eraser';
}
function rainbowColor(){
    color = 'rainbow';
}
function clearAll(){
    var gridboxes = grid.querySelectorAll('div');
    gridboxes.forEach(box => box.style.backgroundColor = 'white');
}
function colorGrid(){
    switch(color) {
        case 'eraser':
            this.style.backgroundColor = 'white';
            break;
        case 'rainbow':
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            break;
        default:
            this.style.backgroundColor = color;
            break;
    }   
}

gridSize(pixel.value)
pixel.addEventListener('mouseup', gridSize);
userColor.addEventListener('change', userColorSelection)
userColor.addEventListener('input', userColorSelection)
userColor.addEventListener('click', userColorSelection)
eraser.addEventListener('click', eraseColor)
rainbow.addEventListener('click', rainbowColor)
clear.addEventListener('click', clearAll);



