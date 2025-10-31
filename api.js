async function obtenerUsuarios() {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const usuario = await respuesta.json();
    console.log('Usuario obtenido:', usuario.name);
};

obtenerUsuarios();

