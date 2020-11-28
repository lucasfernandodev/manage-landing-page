// Seleciona o container
const container = document.querySelector('.users .container');


// Define uma margem para o container
const containerMargin = 0;


// Seleciona o card
const card = document.querySelector('.card-user');


// Conta o numero de cards dinamicamente
const cardCount = document.querySelectorAll('.card-user').length;


// Pega o tamanho (Width) do elemento card
let getCard = card.getBoundingClientRect();
const cardWidth = getCard.width;


// define as margens ( left / right ) do card
const cardMargin = 50;


// Seleciona os controles do slider
const controlLeft = document.querySelector('.left');
const controlRight = document.querySelector('.right');


// Define a distancia que o animation vai mover
let movimento = cardWidth + containerMargin + 70;


// Variavel de troca de slider
var chave = false;


// Definir o tamanho do container
let containerWidth = (cardWidth * cardCount) - (containerMargin * 2) + (cardMargin * cardCount);
container.style.width = `${containerWidth}px`;










/********************************
/*
/* ANIMAÇÃO SIMPLES PARA 1 SLIDE
/*
/********************************/


const config_ = {
    duration: 1900, // Duração da movimentação
    fill: 'forwards', // trava a animação no frame final
    easing: 'ease-in-out' // suavisa a movimentação do slider
}



// Movimento inicial
controlLeft.addEventListener('mousemove', async () => {
    if (chave === false) {    
        const animationInitial = container.animate({marginLeft: `-${movimento}px`}, config_);   
        await animationInitial.finished;
        chave = true;
    }
});


// Movimento final
controlRight.addEventListener('mousemove', async () => {
    if (chave === true) {
        const animationEnd = container.animate({marginLeft: `${0}px`}, config_);
        await animationEnd.finished;
        chave = false;
    }
});
