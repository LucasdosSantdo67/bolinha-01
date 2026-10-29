 // Projeto Bolinha - 01
let xBolinha = 200;
let yBolinha =200;
let raio =15;
let xVelocidade =3;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mostraBolinha();
  movimentaBolinha();
  verificaColisao();
}


//--------Função mostra Bolinha----------
function mostraBolinha(){
  circle(xBolinha,yBolinha,raio);
}

//--------- Movimanta Bolinha --------------
function movimentaBolinha(){
  xBolinha += xVelocidade;
}

//----------Verifica Colisao--------
function verificaColisao(){
  if(xBolinha > width || xBolinha <0){
    xVelocidade *=-1;
  }
}




