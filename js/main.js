//asociar el evento click a la imagen de usuario
var user=document.getElementById("imgUser");
user.onclick=function(){
    var menuUser=document.getElementById("menuUser");
    if(menuUser.style.display=="block"){
        menuUser.style.display="none";
}else{
    menuUser.style.display="block";
}
};
//asociar el evento click al icono de menu
var menuMovil=document.getElementById("menuMovil");
menuMovil.onclick=function(){
    if(burger.style.display=="none"){
        burger.style.display="block";
}else{
    burger.style.display="none";
}
}
//asociar el evento click a las papeleras
var papeleras=document.getElementsByClassName("papelera");
for(let index=0; index < papeleras.length;index++){
    const element = papeleras[index];
    element.onclick=function(e){
        e.target.parentElement.parentElement.remove();
        alert("Se ha eliminado con éxito");
    }
    
       
    };
    //input que asocie la fecha actual al formulario
    var fecha=document.getElementById("fecha");
    var hoy=new Date();
    var dia = hoy.getDate();
var mes = hoy.getMonth() + 1; // Los meses empiezan desde 0
var anio = hoy.getFullYear();
if(dia < 10) {
    dia = '0' + dia;
}
if(mes < 10) {
    mes = '0' + mes;
}
fecha.value = anio + '-' + mes + '-' + dia;

//asociar el evento click al boton de enviar
var formulario=document.getElementById("formIncidencias");
formulario.onsubmit=function(e){
    e.preventDefault();
    var incidencia=document.getElementById("descripcion").value;
    
    var fecha=document.getElementById("fecha").value;
    var tablaIncidencias=document.getElementById("tbodyIncidencias");
    
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var button =document.createElement("button");
    button.classList.add("papelera");
    button.innerText="Eliminar";

    
   
    button.onclick=function(e){
       var row=this.closest("tr");
       row.remove();
    };
    td1.innerText=obtenerIdMayor(tablaIncidencias)+1;
    td2.innerText=fecha;
    td3.innerText=incidencia;
    td4.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tablaIncidencias.appendChild(tr);
    formulario.reset();
}
//ordenar formato fecha em tabla
function formatearFecha(fechaOriginal) {
 var datosFecha = fechaOriginal.split("-");
 return datosFecha[2] + "/" + datosFecha[1] + "/" + datosFecha[0];
}
function obtenerIdMayor() {
    var tablaIncidencias = document.getElementById("tablaIncidencias");
    var filas = tablaIncidencias.getElementsByTagName("tr");
    var idMayor = 0;

    for (var i = 0; i < filas.length; i++) {
        var celdas = filas[i].getElementsByTagName("td");
        if (celdas.length > 0) {
            var id = parseInt(celdas[0].innerText);
            if (id > idMayor) {
                idMayor = id;
            }
        }
    }

    return idMayor;
}
    
