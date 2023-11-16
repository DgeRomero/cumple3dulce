let nombre = document.getElementById('entrada')
let boton = document.getElementById('boton')
let invitado = document.getElementById('invitado')
let formulario = document.getElementById('formulario')
let principal = document.getElementById('principal')
let foto = document.getElementById('dul')
let alerta = document.getElementById('alerta')
let mapa = document.getElementById('mapa')


function mostrarInvitacion(){
    if(nombre.value != ""){
        let name = nombre.value
        formulario.style.display = 'none'
        invitado.innerHTML = "¡HOLA " + name.toUpperCase() + "!" 
        principal.style.display = 'flex'
    }else {
        formulario.style.display = 'none'
        alerta.style.display = 'flex'
    }
    
}
function mostrarMapa(){
    mapa.style.display = 'flex'
    principal.style.display = 'none'
    alerta.style.display = 'none'
    formulario.style.display = 'none'
}
function volver(){
    formulario.style.display = 'flex'
    principal.style.display = 'none'
    alerta.style.display = 'none'
    mapa.style.display = 'none'
    nombre.value = ""
}