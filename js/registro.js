var inputPass=document.getElementById("pass");
var inputRepass=document.getElementById("repass");

/*crear boton*/

inputPass.oninput=validacionInput;
inputRepass.oninput=validacionInput;

function validacionInput(){
    var btnCrear=document.getElementById("bntCrear");
    var txtRePass=inputRepass.value;
    var txtPass=inputPass.value;
    if(txtPass==txtRePass){
        btnCrear.disabled=false;
        msg.style.display="none";
    }else{
        btnCrear.disabled=true;
        msg.style.display="block";
    }
    //console.log(txtPass);
}