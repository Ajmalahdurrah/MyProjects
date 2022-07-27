// Select color input
// Select size input
const pixelCanvas = document.getElementById('pixelCanvas');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');


// When size is submitted by the user, call makeGrid()
function makeGrid() {
  let canvas = pixelCanvas;
  let height = inputHeight.value;
  let width = inputWidth.value;
  let snip = '';
  for (let i = 1; i <= height; i++) {
     snip += '<tr>';
     for (let j = 1; j <= width; j++) {
       snip += '<td onclick = "this.style.backgroundColor = setColor() "></td>'
     }
     snip += '</tr>'
  }
  canvas.innerHTML = snip;
  return false
}
function setColor(){
  let color = colorPicker.value;
  return color;
  
}
