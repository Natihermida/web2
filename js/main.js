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