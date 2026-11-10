// Contador de tempo

const inicio = new Date("2024-11-09T00:00:00"); 

function atua(){
  const hoje = new Date();


  const segt = Math.floor((hoje - inicio) / 1000); // total de segundos
  const mint = Math.floor(segt / 60); // total de minutos
  const hrt = Math.floor(mint / 60); // total de horas
  const diat = Math.floor(hrt / 24); // total de dias
  const semt = Math.floor(diat / 7); // total de semanas

  let mest = (hoje.getFullYear() - inicio.getFullYear()) * 12 + (hoje.getMonth() - inicio.getMonth()); // total de meses

  if (hoje.getDate() < inicio.getDate()){
    mest--;
  }

  const anot = Math.floor(mest / 12); // total de anos 

  const anos = anot;
  const meses = mest % 12; // meses que irão sobrar depois dos anos

  const marco = new Date(inicio);
  marco.setMonth(inicio.getMonth() + mest);
  const dias = Math.floor((hoje - marco) / 86400000);

  const hr = hrt % 24; 
  const min = mint % 60;
  const seg = segt % 60;

document.getElementById("contador").textContent = " Estamos juntos há "  + anos + " Anos," + meses + " meses," + dias + " dias," + hr + " horas," + min + " minutos e " + seg + " segundos 💕";

document.getElementById("totais").innerHTML = "Ou seja, já são:<br>" + 
    segt.toLocaleString("pt-BR") + " segundos<br>" +
    mint.toLocaleString("pt-BR") + " minutos<br>" +
    hrt.toLocaleString("pt-BR")  + " horas<br>" +
    diat.toLocaleString("pt-BR") + " dias<br>" +
    semt.toLocaleString("pt-BR") + " semanas<br>" +
    mest.toLocaleString("pt-BR") + " meses<br>" +
    anot.toLocaleString("pt-BR") + " anos 💕";

}

atua();
setInterval(atua, 1000);


// Loop topo esquerda
const fteEsq = ["img/ftr4.jpeg", "img/ftr5.jpeg", "img/ftr6.jpeg", "img/ftr7.jpeg"];
let pteEsq = 0;

function teEsq() {
  pteEsq = (pteEsq + 1) % fteEsq.length;
  document.getElementById("img-te").src = fteEsq[pteEsq];
}

setInterval(teEsq, 3000);

// Loop topo direita
const ftdDir = ["img/ftr8.jpeg", "img/ftr9.jpeg", "img/ftr10.jpeg", "img/ftr11.jpeg"];
let ptdDir = 0;

function tdDir() {
  ptdDir = (ptdDir + 1) % ftdDir.length;
  document.getElementById("img-td").src = ftdDir[ptdDir];
}

setInterval(tdDir, 3500);


// Loop baixo direita
const ftsDir = ["img/ft-dir.jpg", "img/ftr12.jpeg", "img/ftr13.jpeg", "img/ftr14.jpeg"];
let pDir = 0;

function tDir() {
  pDir = (pDir + 1) % ftsDir.length;
  document.getElementById("img-dir").src = ftsDir[pDir];
}

setInterval(tDir, 4000);


// Loop baixo esquerda
const ftsEsq = ["img/ft-esq.jpg", "img/ftr1.jpeg", "img/ftr2.jpeg", "img/ftr3.jpeg"];
let pEsq = 0;

function tEsq() {
  pEsq = (pEsq + 1) % ftsEsq.length;
  document.getElementById("img-esq").src = ftsEsq[pEsq];
}

setInterval(tEsq, 4500);

// Loop background

const ftsBG = ["img/ft-esq.jpg", "img/ftr1.jpeg", "img/ftr2.jpeg", "img/ftr3.jpeg", "img/ft-dir.jpg", "img/ftr12.jpeg", "img/ftr13.jpeg", "img/ftr14.jpeg", "img/ftr4.jpeg", "img/ftr5.jpeg", "img/ftr6.jpeg", "img/ftr7.jpeg", "img/ftr8.jpeg", "img/ftr9.jpeg", "img/ftr10.jpeg", "img/ftr11.jpeg", "img/ftr15.jpeg", "img/ftr16.jpeg"];
let pBG = 0;

function tBG() {
  pBG = (pBG + 1) % ftsBG.length;
  document.getElementById("bg").style.backgroundImage = `url(${ftsBG[pBG]})`;
}

setInterval(tBG, 5000);