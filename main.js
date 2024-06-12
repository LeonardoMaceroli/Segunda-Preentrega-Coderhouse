let tareas = [];
const maxTareas = 5;
let opcion;

const agregarTarea = () => {
    if (tareas.length >= maxTareas) {
        alert('No se pueden agregar mas tareas.');
        return;
    }

    const agenda = prompt('Ingrese una tarea');
    if (agenda) {
        tareas.push({ agenda, completada: false });
        alert(`"${agenda}" agregada.`);
    } else {
        alert('No se ingreso ninguna tarea.');
    }
};

const listarTareas = () => {
    if (tareas.length === 0) {
        alert('No hay tareas en la lista.');
        return;
    }

    let mensaje = 'Lista de tareas:\n';
    tareas.forEach((tarea, lista) => {
        mensaje += `${lista + 1}. ${tarea.agenda} - ${tarea.completada ? 'Completada' : 'Pendiente'}\n`;
    });
    alert(mensaje);
};

const eliminarTarea = () => {
    const indiceTarea = parseInt(prompt('Ingrese el numero de tarea que desea eliminar:')) - 1;
    if (indiceTarea >= 0 && indiceTarea < tareas.length) {
        const tareaEliminada = tareas.splice(indiceTarea, 1);
        alert(`"${tareaEliminada[0].agenda}" eliminada.`);
    } else {
        alert('Numero de tarea invalido.');
    }
};

const completarTarea = () => {
    const indiceTarea = parseInt(prompt('Ingrese el numero de tarea que desea marcar como completada:')) - 1;
    if (indiceTarea >= 0 && indiceTarea < tareas.length) {
        tareas[indiceTarea].completada = true;
        alert(`"${tareas[indiceTarea].agenda}" completada.`);
    } else {
        alert('Numero de tarea invalido.');
    }
};

do {
    opcion = prompt('Ingrese la opcion deseada:\n1. Agregar tarea\n2. Listar tareas\n3. Eliminar tarea\n4. Completar tarea\n5. Salir');

    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            listarTareas();
            break;
        case "3":
            eliminarTarea();
            break;
        case "4":
            completarTarea();
            break;
        case "5":
            alert("¡Hasta pronto!");
            break;
        default:
            alert("Opcion invalida. Por favor, ingrese una opcion valida.");
    }

} while (opcion !== "5"); 
