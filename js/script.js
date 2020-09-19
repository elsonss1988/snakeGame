console.log("cobrinha");
let canvas=document.getElementById("snake");
let context=canvas.getContext("2d");
let box=32;
var snake =[];
snake[0]={
    x:0*box,
    y:0*box
}
let direction="right"
function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0,0,16*box,16*box);
}
function criarCobrinha(){
    for(var i=0;i<snake.length;i++){
        context.fillStyle="green";
        context.fillRect(snake[i].x, snake[i].y,box,box);
    }
}
document.addEventListener('keydown',update);
function update(event){
    if(event.key ==37 && direction !="right") direction="left";
    if(event.key ==38 && direction !="down") direction="up";
    if(event.key ==39 && direction !="left") direction="right";
    if(event.key ==40 && direction !="up") direction="down";
}
function iniciarJogo(){
    if (snake[0].x>15*box&& direction=="right") snake[0].x=0;
    if (snake[0].x<0*box&& direction=="left") snake[0].x=16*box;
    if (snake[0].y>15*box&& direction=="down") snake[1].y=0;
    if (snake[0].y<0*box&& direction=="up") snake[0].y=0;
    criarBG();
    criarCobrinha();
    let snakex=snake[0].x;
    let snakey=snake[0].y;
    if(direction=="right") snakex+= box;
    if(direction=="left") snakex-=box;
    if(direction=="up") snakey-=box;
    if(direction=="down") snakey+=box
    snake.pop();
    let newHead={
        x:snakex,
        y:snakey
    }
    snake.unshift(newHead);
}

let jogo =setInterval(iniciarJogo, 100);