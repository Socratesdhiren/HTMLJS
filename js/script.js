//create canvas
let canvas = document.createElement("canvas");
canvas.style.height = '500px';
canvas.style.width = '400px';
canvas.style.backgroundColor = '#F1F';
canvas.style.margin= 'auto';

document.body.style.height = '1000px';
document.body.style.width = '1000px';


let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.arc(100 , 75 ,0 , 2 *Math.PI);
ctx.stroke();


//appent child

document.body.appendChild(canvas);
