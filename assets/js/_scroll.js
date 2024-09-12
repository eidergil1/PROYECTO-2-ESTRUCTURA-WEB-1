
/* DOCUMENTACIÓN DE ESTE JAVASCRIPT

objetivos:

-Animación en el nav
-Animación de aparición derecha, izquierda o centro de elementos varios.


Requerimientos:

Requiere que en el HTML haya elementos con CLASE: izquierda, derecha o centro para que ejecute las animaciones.

Este javascript requiere de unas clases y animaciones que deben estar en el CSS vinculado al documento HTML en cuestión.

Este javascript también efectua una animación sobre el NAV el cual debe tener un id: navegador para que funcione

Desarrollado por la magnifica clase del curso de desarrollo web
*/

//cogemos todos los elementos que tengan clase izquierda y derecha
const lad_izd_efect = document.getElementsByClassName("lad_izd_efect")
const lad_der_efect = document.getElementsByClassName("lad_der_efect")
const lad_cen_efect = document.getElementsByClassName("lad_cen_efect")

//listener de scroll para modificar el nav y ejecutar animaciones
// Se ejecuta cuando el usuario hace scroll sobre la ventana
window.onscroll=function(){     
    // Entro si el tamaño útil del navegador es mayor o igual a 750px   
    if(window.innerWidth>="750"){
        for(const item of lad_izd_efect){
            animaciones(item, -5, "2s", true)
        }
        for(const item of lad_der_efect){
            animaciones(item, 5, "2s", true)
        }        
    }
    for(const item of lad_cen_efect){        
        animaciones(item, 0, "2s", true)
    } 
    
}   



// Esta función recibe varios parámetros que configurarán la animación a realizar cuando el elemento esté en pantalla. A esta función llegamos cuando se hace scroll.
function animaciones(el, desplazamiento, duracion, opacidad){
    if (estaEnlaPantalla(el)==true) {
        el.style.opacity = "1"
        el.style.transform = "translateX(0)"
        el.style.transform = "translateY(0)"
        el.style.transition = duracion
    }else{        
        if(opacidad === true){
            el.style.opacity = "0"
        }else{
            el.style.opacity = 1
        }
        el.style.transform = `translateX(${desplazamiento}vw)`        
        el.style.transition = "0"
    }
}

/* Función para saber si el elemento recibido está o no en pantalla*/
function estaEnlaPantalla(el) {
    console.log("innerheight "+window.innerHeight)
    console.log("clientheight "+document.documentElement.clientHeight)
    var distance = el.getBoundingClientRect();
    console.log("Distance del top "+distance.top)
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}