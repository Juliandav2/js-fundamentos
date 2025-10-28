// Base de datos simulada

let usuarios = [
    {id : 1, nombre : "julian", edad : 21},
    {id : 2, nombre : "Maria", edad : 25},
    {id : 3, nombre : "Carlos", edad : 19},
];

// Mostrar todos los usuarios

function mostrarUsuarios() {
    console.log('lista de usuarios');
    usuarios.forEach((user) => console.log(`${user.id}. ${user.nombre} - ${user.edad} años`))
};

// Agregar usuario a la base de datos simulada

function agregarUsuario(nombre, edad) {
    const nuevo = {
        id : usuarios.length + 1,
        nombre, edad
    };

    usuarios.push(nuevo);
    console.log(`Usuario agregado: ${nombre}`);
};

// Buscar un usuario por el nombre

function buscarUsuario(nombre) {
    const encontrado = usuarios.find((user) => user.nombre.toLowerCase() === nombre.toLowerCase());
    if (encontrado) {
        console.log('Usuario encontrado')
    } else {
        console.log('usuario no encontrado')
    };

};

// Eliminar un usuario por el nombre

function eliminarUsuario(nombre) {
    const original = usuarios.length;
    usuarios = usuarios.filter((user) => user.nombre.toLowerCase() !== nombre.toLowerCase());
    if (usuarios.length < original) {
        console.log('Usuario eliminado')
    } else {
        console.log('No se encontro el usuario');
    }
}

// Mostrar los usuarios ordenados por edad

function ordenarUsuarios() {
    const ordenados = [...usuarios].sort((a, b) => a.edad - b.edad);
    console.log('Usuarios ordenados por edad: ');
    ordenados.forEach((user) => console.log(`${user.nombre} (${user.edad})`));
};

// Prueba de las funciones

mostrarUsuarios()
agregarUsuario("Camila", 32);
buscarUsuario("Julian");
eliminarUsuario("Camila");
ordenarUsuarios();
