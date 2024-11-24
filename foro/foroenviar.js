// Selección de elementos
const foroForm = document.getElementById('foroForm');//tratar dd de no usar ID//
const resultadoDiv = document.getElementById('resultado'); //tratar dd de no usar ID//
 
// Función para guardar comentarios en Local Storage
function saveToLocalStorage(nombre, comentarios) {
    // Obtener datos existentes o inicializar con un array vacío
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    // Agregar el nuevo comentario
    comentariosGuardados.push({ nombre, comentarios });
    // Guardar de nuevo en Local Storage
    localStorage.setItem('comentarios', JSON.stringify(comentariosGuardados));
}

// Función para renderizar las tarjetas desde Local Storage
function renderCards() {
    // Limpiar el contenedor
    resultadoDiv.innerHTML = '';
    // Obtener datos de Local Storage
    const comentariosGuardados = JSON.parse(localStorage.getItem('comentarios')) || [];
    // Crear tarjetas para cada comentario
    comentariosGuardados.forEach(comentario => {
        const card = `
        <div class="card mb-3">
            <div class="card-header">
                <strong>${comentario.nombre}</strong>
            </div>
            <div class="card-body">
                <p class="card-text">${comentario.comentarios}</p>
            </div>
        </div>`;
        resultadoDiv.innerHTML += card;
    });
}

// Manejo del evento submit del formulario
foroForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const nombre = document.getElementById('nombre').value;
    const comentarios = document.getElementById('comentarios').value;

    // Guardar en Local Storage
    saveToLocalStorage(nombre, comentarios);

    // Renderizar de nuevo las tarjetas
    renderCards();

    // Limpiar los campos después del envío
    this.reset();
});

// Renderizar las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', renderCards);



