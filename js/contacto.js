var checkAuth=document.getElementById("autorizacion");
var btnEnviar=document.getElementById("bntEnviar")
checkAuth.onclick=function(){
    console.log(checkAuth.value);
}
var checkAuth=document.getElementById("autorizacion");
checkAuth.onclick=function(){
    if(checkAuth.checked==true){
        btnEnviar.disabled=false;
    }else{
        btnEnviar.disabled=true;
    }
}