let estudiantes = [];
function agregar() {
    var nombre = document.getElementById("nombre").value.trim();
    var calificacionInput = document.getElementById("calificacion").value;

    if (nombre === "" || calificacionInput === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    var calificacion = parseFloat(calificacionInput);
    if (isNaN(calificacion)) {
        alert("Por favor, ingresa una calificación numérica válida.");
        return;
    }

    estudiantes.push({ nombre: nombre, calificacion: calificacion });

    
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}
function calcular(){
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados para calcular.");
        return;
    }

    estudiantes.forEach(estudiantes => {
        console.log(estudiantes.nombre)
        
    });

    let promedio =estudiantes.reduce ((total, estudiante) => total +
    estudiante.calificacion,0) / estudiantes.length;

    let calimax= Math.max(...estudiantes.map(e=> e.calificacion));
    let calimin= Math.min(...estudiantes.map(e=> e.calificacion));
    
    let estudianteMax = estudiantes.find(e => e.calificacion === calimax);
    let estudianteMin = estudiantes.find(e => e.calificacion === calimin);
    
    document.getElementById("promedio").value=promedio;
    document.getElementById("mayor").value = estudianteMax ? estudianteMax.nombre : "";
    document.getElementById("menor").value = estudianteMin ? estudianteMin.nombre : "";

}