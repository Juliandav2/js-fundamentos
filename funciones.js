// const persona = {
//     nombre : 'julian',
//     edad : 22,
//     ciudad : 'cali'
// };

// const mostrarInfo = ({nombre, edad, ciudad}) => {
//     console.log(`${nombre} tiene ${edad} años y vive en ${ciudad}.`);
// };

// mostrarInfo(persona);

// Spread y rest

// const frutas = ['manzana', 'melon', 'mora'];
// const masFrutas = [...frutas, 'uva'];

// function sumarr(...numeros) {
//     return numeros.reduce((total, n) => total + n, 0)
// }

// console.log(sumarr(2, 4, 6));
// console.log(sumarr(2, 3, 4, 8, 5, 3))

// const ssumar = (...nums) => nums.reduce((a, b) => a + b, 0);
// console.log(ssumar(5, 10, 15, 20));

// const usuarioa = { nombre: "Julian", nivel: "intermedio", puntos: 80 };
// const cambios = { puntos: 100, nivel: "avanzado" };

// function actualizarPerfil(usuarioa, cambios) {
//     const nuevo = {...usuarioa, ...cambios};
//     return nuevo;
// }

// const nuevoUsuario = actualizarPerfil(usuario, cambios);
// console.log('Nuvo usuario:', nuevoUsuario);
// console.log('Usuario original:', usuario);

const usuario = { nombre: "Julian", edad: 25, puntos: 100 };


function eliminarPropiedad(objeto, propiedad) {
    const {[propiedad]: _, ...resto} = objeto;
    return resto

}

const sinPuntos = eliminarPropiedad(usuario, 'puntos');
console.log('Nuevo', sinPuntos);
console.log('Original', usuario);