
//contacto
const contactoFormulario = document.getElementsByClassName("formulario")[0];
const botonEnviar = document.getElementsByClassName("btn btn-primary")[0];
const email = document.getElementsByClassName("form-control")[0];
const comentario = document.getElementById("floatingTextarea");

botonEnviar.addEventListener('click', function() {
    // Verifica que no estén vacíos
    if (email.value.trim() === "" || comentario.value.trim() === "") {
        alert("Por favor, completa ambos campos antes de enviar.");
    } else {
        contactoFormulario.style.display = 'none';
        fondo.style.display = 'block';
    }
});
    
