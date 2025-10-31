// Arrays 

let frutas = ['manzana', 'pera', 'zanahoria'];

// Metodos 

frutas.push('Uva');
frutas.pop();
frutas.unshift('pera');
frutas.shift();

// Metodos mas modernos

frutas.forEach(fruta => console.log(fruta));
let mayusculas = frutas.map(fruta => fruta.toUpperCase());
let largas = frutas.filter(fruta => fruta.length > 5);
let total = [1, 2, 3].reduce((suma, numero) => suma + numero, 0);


