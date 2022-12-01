// Crear funcion para cambiar clase
function cambioDeclase(){
  const titulo = document.getElementById("principio");

  const text = document.querySelector(".texto");

  titulo.classList.add("rojo");
  text.classList.add("verde");
}

// Llamar funcion para cambiar la clase en un evento dentro de un boton
const button = document.getElementById("boton");

button.addEventListener('click', cambioDeclase);