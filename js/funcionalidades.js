//funciones para el audio que esta en el HOME HTML/
 let uno;
 let dos;
 let tres;
 let principal;

function myFunction() {
  uno = document.querySelector("myAudio").audioTracks.length;
  document.querySelector("demoUno").innerHTML = x;
}




function myFunction() {
      dos  = document.querySelector("myAudioDos").audioTracks.length;
      document.querySelector("demoDos").innerHTML = x;
    }

    

    
function myFunction() {
      tres = document.querySelector("myAudioTres").audioTracks.length;
      document.querySelector("demoTres").innerHTML = x;
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
  


