let tareas = [];

// Agregar tarea 

function agregarTarea(descripcion) {
    const nuevaTarea = {
        id : tareas.length + 1,
        descripcion : descripcion,
        completada : false
    };

    tareas.push(nuevaTarea);
    console.log("Tarea agregada con exito.")
};

// Mostrar tarea

function mostrarTarea() {
    console.log('---Lista de tareas---');
    tareas.forEach(tarea => {const estado = tarea.completada ? 'Completada' : 'Pendiente';
        console.log(`${tarea.id}. ${tarea.descripcion} - ${estado}`);
    });
};

// Completar tarea

function completarTarea(id) {
    const tarea = tareas.find(t => t.id === id);
    if (tarea) {
        tarea.completada = true;
        console.log('Tarea marcada como completada.')
    } else {
        console.log('No se encontro la tarea.')
    }
};


// Eliminar tarea

function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    console.log('Tarea eliminada exitosamente.')
};

agregarTarea('Estudiar js');
agregarTarea('Hacer push');
agregarTarea('Bañarme')
mostrarTarea();
completarTarea(2);
eliminarTarea(1);
mostrarTarea();