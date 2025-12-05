// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);
// Función contenedora de todos los procedimientos
function comienzo() {
    var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
    let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
    let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
    let selector = document.getElementById("temas");//Desplegable con los temas
    let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
    let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
    let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
    let botonBorrar = document.getElementById("borrar");//Botón borrar
    let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
    let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
    let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
    var pincelActivo = false;//Variable booleana que guarda el estado del pincel 

    botonDescargar.addEventListener("click", conexionAJAX);
    botonQueDibujo.addEventListener("click", dibujoAleatorio);
    botonCrearLienzo.addEventListener("click", crearLienzo);
    botonBorrar.addEventListener("click", borrarLienzo);
    paleta.addEventListener("click", activarPaleta);
    
    function conexionAJAX() {
        fetch("temasDibujo.json")
                .then((response) => response.json())
                .then((respuesta) => {
                    listadoTemas = respuesta.TEMAS;
                    for (let tema of respuesta.TEMAS) {
                        let nuevaOp = document.createElement("option");
                        nuevaOp.innerHTML = tema[0];
                        selector.appendChild(nuevaOp);
                    }
                    botonDescargar.removeEventListener("click", conexionAJAX);
                });

    }
    function dibujoAleatorio() {
        if (selector.value == "selecciona") {
            dibAle.innerHTML = "DEBES SELECCIONAR UN TEMA DE LA LISTA";
        } else {
            for (t of listadoTemas) {
                if (t[0] == selector.value) {
                    let ale = parseInt(Math.random() * (t.length - 1) + 1);
                    dibAle.innerHTML = t[ale];
                    break;
                }
            }
        }

    }

    function crearLienzo() {
        let dimension = document.getElementById("tam_lienzo").value;
        let tabla = document.getElementById("dibujo");
        for (let i = 0; i < dimension; i++) {
            let fila = document.createElement("tr");
            fila.classList.add("fila");
            for (let j = 0; j < dimension; j++) {
                let columna = document.createElement("td");
                columna.classList.add("celda");
                fila.appendChild(columna);
            }
            tabla.appendChild(fila);
        }
    }
    
    function borrarLienzo(){
        let tabla = document.getElementById("dibujo");
        while (tabla.hasChildNodes()){
            tabla.removeChild(tabla.firstChild);
        }
    }
    
    function activarPaleta(){
        for (let color of paleta.children){
            color.addEventListener("click", (ev)=>{
                for(let c of paleta.children){
                    c.classList.remove("seleccionado");
                }
                ev.target.classList.add("seleccionado");
            })
        }
    }
    
    function escogerColor(e){
        let celdaEscogida = null;
        celdaEscogida = e.target;
        
        celdaEscogida.classList.add("seleccion");
    }
}

