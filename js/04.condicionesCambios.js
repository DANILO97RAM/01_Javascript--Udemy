// Condiciones
var a =5;
var b =10;

if (a > b){
  console.log('a es mayor que b');
} else if(a==b){
  console.log('a es lo mismo que b');
} else{
  console.log('a es menor que b');
}

// evitar los else if: switches

var dia = 'lunes';
switch(dia){
  case 'sabado': 
    console.log('Voy a estudiar PHP');
    break;
  case 'domingo': 
    console.log('Voy a descansar');
    break;
  case 'lunes': 
    console.log('Voy a estudiar CSS');
    break;
  case 'martes': 
    console.log('Voy a estudiar HTML');
    break;  
  default: console.log('Voy a estudiar JavaScript');
}
