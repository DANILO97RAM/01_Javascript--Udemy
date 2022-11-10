var numAleatorio = document.querySelector('#numeroAleatorio');
var num = 0;
// Math.random() del 0 al 1
// Math.floor() trunca
// Math.ceil() redondea al numero mayor del decimal
// Math.round() redondea al entero proximo
numero = Math.round(Math.random()*10); 
numAleatorio.innerHTML = numero;

