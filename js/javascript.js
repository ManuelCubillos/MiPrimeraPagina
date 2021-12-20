function validar() {
    let tipomensaje, nombres, email, telefono, comentario

    tipomensaje = document.getElementById('tipomensaje').value
    nombres     = document.getElementById('nombres').value
    email       = document.getElementById('email').value
    telefono    = document.getElementById('telefono').value
    comentario  = document.getElementById('comentario').value


    alert("Bienvenido" + "  " + nombres + "  " + "tu requerimiento es:" + "  " + tipomensaje + "  " + "su email es: " + email + "  " + " su telefono es: " + "  "+ telefono + "  " + comentario)

} 
