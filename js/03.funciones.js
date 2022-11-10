// FUNCIONES SIN PARAMETROS
// Declararacion
function saludoPues(){
    //Tarea de la funcion
    console.log('Hola ome');
}

//ejecucion de la funcion
saludoPues();

//FUNCIONES CON PARAMETROS
function operacion(digito1,digito2){
  var resultado = digito1 + digito2;
  console.log('resultado: ',resultado);
}

operacion(5,2);

//FUNCIONES CON RETORNO SIN PARAMETROS
function retorno1(){
  var num =3;
  return num
}
console.log('retorno 1: ',retorno1());

// Funciones con retornos y parametros
function retorno2(numero){
  return numero;
}

console.log('retorno 2: ',retorno2(33));