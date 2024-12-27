/*capturar evento sublimt del formulario*/
var formulario=document.getElementById("formulario")
formulario.onsublimit=function(e){
    e.preventDefault();
    var usuario=document.getElementById("usuario").value;
    var password=document.getElementById("password").value;
    if(usuario=="admin"&& password=="admin"){
        window.location.href="main.html";
    }
}