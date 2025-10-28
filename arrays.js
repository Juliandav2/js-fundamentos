const numeros = [2, 4, 6, 8, 10];
console.log('Original:', numeros)

const cuadrados = numeros.map(n => n * n);
console.log('Cuadrados:', cuadrados);

const mayoress = numeros.filter(n => n > 5);
console.log('Mayores de 5:', mayoress);

const suma = numeros.reduce((acomulador, n) => acomulador + n, 0);
console.log('Suma total:', suma);

const usuarios = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Juan", edad: 22 },
  { nombre: "María", edad: 19 },
];

const mayores = usuarios.filter(usuario => usuario.edad >= 18);
console.log(mayores);

const nombres = mayores.map(usuario => usuario.nombre);
console.log(nombres);

const nombresMayores = usuarios.filter(usuario => usuario.edad >= 18).map(usuario => usuario.nombre);
console.log(nombresMayores) 

nombresMayores.forEach(nombre => console.log(`${nombre} es mayor de edad`))

