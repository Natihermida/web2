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