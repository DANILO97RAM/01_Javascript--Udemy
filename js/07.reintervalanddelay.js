var tiempo = document.querySelector('#tiempo');
var segundos = 0;

// SET INTERVAL (Intervalo de tiempo): setInterval(function,tiempo)

var intervalo = setInterval(function(){
  segundos++;
  console.log('segundos:',segundos);
  tiempo.innerHTML = segundos;
  // tiempo.innerHTML += segundos; concatena
},1000)

// SET TIMEOUT (retardo de tiempo): setTimeout(function,tiempo)
// setTimeout(function(){
//   alert('Se cumplio el tiempo')
// },5000)


setTimeout(function(){
  clearInterval(intervalo);
},5000)