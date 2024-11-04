//funciones para el audio que esta en el HOME HTML/
 let uno;
 let dos;
 let tres;
 let principal;

function myFunction() {
  uno = document.querySelector("myAudio").audioTracks.length;
  document.querySelector("demoUno").innerHTML = '';
}




function myFunction() {
      dos  = document.querySelector("myAudioDos").audioTracks.length;
      document.querySelector("demoDos").innerHTML = '';
    }

    

    
function myFunction() {
      tres = document.querySelector("myAudioTres").audioTracks.length;
      document.querySelector("demoTres").innerHTML = '';
    }

    

    
function myFunction() {
      principal = document.querySelector("myAudioPrincipal").audioTracks.length;
      document.querySelector("demoPrincipal").innerHTML = x;
    }

// Selecciona todos los elementos <audio> en la página
var audios = document.querySelectorAll('audio');

// Recorre cada elemento de audio
for (var i = 0; i < audios.length; i++) {

    // Escucha si le diste play
    audios[i].addEventListener('play', function() {

        // Si le diste play, pausa todos los demas, menos al que diste play
        for (var j = 0; j < audios.length; j++) {
            if (audios[j] !== this) {
                audios[j].pause();
                audios[j].currentTime = 0;
            }
        }
    });
}
  


//////////////////////////////////////
//pagina de ENTREVISTAS sin terminar
let videoEntrevista;
let videoPerformance;
videoEntrevista =document.getElementById("entrevista");
videoPerformance =document.getElementById("fullvideo");



botonEntrevista = document.querySelector("buttonEntrevista");
botonPerformance = document.querySelector("buttonFull");


botonEntrevista.addEventListener('click', function(){

      videoEntrevista.style.display="block";


  


});


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
    

