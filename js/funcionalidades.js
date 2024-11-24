
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
    
//musica de forma manual//
const audioPlayers = document.querySelectorAll('.audioPlayer');  // Todos los elementos con la clase 'audioPlayer'
const playButtons = document.querySelectorAll('.play');  // Todos los botones de play
const stopButtons = document.querySelectorAll('.stop');  // Todos los botones de stop

// Recorremos todos los botones de play
playButtons.forEach((playButton, index) => {
    playButton.addEventListener('click', function() {
        audioPlayers[index].play();  // Reproducir el audio correspondiente al botón presionado
        alert('El botón de play funciona');
    });
});

// Recorremos todos los botones de stop
stopButtons.forEach((stopButton, index) => {
    stopButton.addEventListener('click', function() {
        audioPlayers[index].pause();  // Pausar el audio correspondiente al botón presionado
        audioPlayers[index].currentTime = 0;  // Restablecer el tiempo del audio al inicio
    });
});

const audioPlayersDos = document.querySelectorAll('.audioPlayerDos');  // Todos los elementos con la clase 'audioPlayer'
const playDos = document.querySelectorAll('.playDos');  // Todos los botones de play
const stopDos = document.querySelectorAll('.stopDos');  // Todos los botones de stop

// Recorremos todos los botones de play
playDos.forEach((playButton, index) => {
    playButton.addEventListener('click', function() {
        audioPlayersDos[index].play();  // Reproducir el audio correspondiente al botón presionado
        alert('El botón de play funciona');
    });
});

// Recorremos todos los botones de stop
stopDos.forEach((stopButton, index) => {
    stopButton.addEventListener('click', function() {
        audioPlayersDos[index].pause();  // Pausar el audio correspondiente al botón presionado
        audioPlayersDos[index].currentTime = 0;  // Restablecer el tiempo del audio al inicio
    });
});

//CANCION NUMERO 3

const audioPlayerstres = document.querySelectorAll('.audioPlayertres');  // Todos los elementos con la clase 'audioPlayer'
const playtres = document.querySelectorAll('.playtres');  // Todos los botones de play
const stoptres = document.querySelectorAll('.stoptres');  // Todos los botones de stop

// Recorremos todos los botones de play
playtres.forEach((playButton, index) => {
    playButton.addEventListener('click', function() {
        audioPlayerstres[index].play();  // Reproducir el audio correspondiente al botón presionado
        alert('El botón de play funciona');
    });
});

// Recorremos todos los botones de stop
stoptres.forEach((stoptres, index) => {
    stoptres.addEventListener('click', function() {
        audioPlayerstres[index].pause();  // Pausar el audio correspondiente al botón presionado
        audioPlayerstres[index].currentTime = 0;  // Restablecer el tiempo del audio al inicio
    });
});

//CANCION PRINCIPAL sin recorrer el array porque por alguna razon que no recuerdo est en desltop como en mobile sin problema



const principal = document.getElementById('principal');
const play= document.getElementById('playPrincipal');
const stop= document.getElementById('stopPrincipal');

play.addEventListener('click', function() {
     principal.play(); 
});

stop.addEventListener('click', function() {
    principal.pause(); 
    principal.currentTime = 0;
});
//galeria carrosel manual//
