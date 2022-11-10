var recuadro= document.querySelector('#recuadro');
var boton= document.querySelector('#boton');
var bt = document.getElementById('boton')
// EVENTOS con HTML y modificado con rom

function cambiarColor(){
    recuadro.style.background = 'red';
}

// Evento desde rom
function moverCaja(){
    recuadro.style.width= '500px';
    recuadro.style.transition = '1s width ease';
}

boton.addEventListener('click',moverCaja)
