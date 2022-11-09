
// Variables numericas
var numeroDecimal = 5;
console.log('esto es un numero: ',numeroDecimal);

//variable de texto
var palabra = 'palabras';
console.log('esto es un texto: ',palabra);
var booleana = true;
console.log('esto es un boleano: ',booleana);
var vector =  ['rojo','amarillo'];
console.log('esto es un vector: ',vector);

// Variables de tipo objeto (object: propiedad y el valor)
var jugo = {'ingrediente1':'fresa',
  'ingrediente2':'mandarina',
  ingrediente3:'banano',
  herram:[1,'dos']
}
console.log('esto es un objeto: ',jugo);
console.log('esto es parte del objeto: ',jugo.herram);

// Variables DOM: Estructura de objetos que genera el navegador cuando
// se carga un doc y se puede modificar con js.
var caja = document.querySelector('#caja');
console.log('caja: ',caja);
caja.style.width = '200px';
caja.style.height = '200px';
caja.style.background= 'blue';
var cajas = document.querySelectorAll('.cajas')
console.log('cajas: ',cajas);
