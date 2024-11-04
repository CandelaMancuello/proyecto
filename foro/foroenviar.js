// Función para cargar comentarios desde localStorage  
function loadComments() {  
    const commentsList = document.getElementById('comments-list');  
    commentsList.innerHTML = '';  

    // Obtener comentarios almacenados  
    const comments = JSON.parse(localStorage.getItem('comments')) || [];  

    // Mostrar cada comentario en tarjetas  
    comments.forEach(comment => {  
        const colDiv = document.createElement('div');  
        colDiv.classList.add('col');  

        const cardDiv = document.createElement('div');  
        cardDiv.classList.add('card', 'mb-3');  

        const cardBodyDiv = document.createElement('div');  
        cardBodyDiv.classList.add('card-body');  

        const cardText = document.createElement('p');  
        cardText.classList.add('card-text');  
        cardText.textContent = comment;  

        cardBodyDiv.appendChild(cardText);  
        cardDiv.appendChild(cardBodyDiv);  
        colDiv.appendChild(cardDiv);  
        commentsList.appendChild(colDiv);  
    });  
}  

// Función para manejar el evento de nuevo comentario  
function addComment() {  
    const commentInput = document.getElementById('comment-input');  
    const comment = commentInput.value.trim();  

    if (comment) {  
        const comments = JSON.parse(localStorage.getItem('comments')) || [];  
        comments.push(comment);  
        localStorage.setItem('comments', JSON.stringify(comments));  

        // Limpiar el campo de entrada  
        commentInput.value = '';  

        // Reload comments  
        loadComments();  
    } else {  
        alert("Por favor, escribe un comentario.");  
    }  
}  

// Evento para enviar el comentario  
document.getElementById('submit-comment').addEventListener('click', addComment);  

// Cargar comentarios al inicio  
loadComments();

