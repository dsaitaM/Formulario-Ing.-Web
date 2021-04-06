var formulario = document.getElementById("formulario");
var nombre = document.getElementById("nombre");
var apellidos = document.getElementById("apellidos");
var rut = document.getElementById("rut");
var guion = document.getElementById("guion");
var mail = document.getElementById("mail");
var telefono = document.getElementById("telefono");
var mensaje = document.getElementById("mensaje");
var checklist = document.getElementsByName("leng");
formulario.addEventListener("submit", function (evento) {
    if (comprobarChecklist(checklist)) {
        if (!isNaN(rut.value) && (!isNaN(guion.value) || guion.value == "k" || guion.value == "K")) {
            document.getElementsByTagName("ul")[0].style.display = "none";
            document.getElementById("enviado").style.display = "block";
            evento.preventDefault();
        }
        else {
            mensaje.innerHTML = "Formato de RUT números sin puntos + digito de verificación";
            mensaje.style.color = "#ff0838";
            mensaje.style.fontSize = "18px";
            mensaje.style.position = "absolute";
            mensaje.style.backgroundColor = "white";
            mensaje.style.display = "block";
            evento.preventDefault();
        }
    }
    else {
        mensaje.innerHTML = "Seleccione mínimo 1 lenguaje de programación";
        mensaje.style.color = "#ff0838";
        mensaje.style.fontSize = "18px";
        mensaje.style.position = "absolute";
        mensaje.style.backgroundColor = "white";
        mensaje.style.display = "block";
        evento.preventDefault();
    }
});
function limpiarDatos() {
    var elementos = document.getElementsByTagName("input");
    var l = elementos.length;
    for (var i = 0; i < l; i++) {
        elementos[i].value = "";
    }
    var lc = checklist.length;
    for (i = 0; i < lc; i++) {
        checklist[i].checked = false;
    }
    document.getElementById("descripcion").value = "";
    var radio = document.getElementsByName("años");
    var lr = radio.length;
    for (i = 0; i < lr; i++)
        radio[i].checked = false;
    mensaje.style.display = "none";
}
function comprobarChecklist(checklist) {
    var flag = false;
    var l = checklist.length;
    for (var i = 0; i < l; i++) {
        if (checklist[i].checked) {
            flag = true;
            break;
        }
    }
    return flag;
}
