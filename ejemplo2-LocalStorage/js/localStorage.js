
function iniciar(){
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar la funcion guardarLocalStorage
    if(btnenviar.addEventListener){
        btnenviar.addEventListener("click", function(){
           guardarLocalStorage();
        }, false);
        
    }else{

        btnenviar.attachEvent("onclik", function(){
            guardarLocalStorage();
        });
    }
    
}


function guardarLocalStorage(){

    var txtUsuario = document.getElementById("usuario").value;
    var txtContrase = document.getElementById("password").value;

    //Almacenar los valores dentro de localStorage
    localStorage.setItem('usuario', txtUsuario);
    localStorage.setItem('password', txtContrase);

    //Comprobamos que se hallan guardado en localStorage
    var user = localStorage.getItem('usuario');
    var pass = localStorage.getItem('password');

    console.log(localStorage);

    if(user != null && user != 'undefined' && user.length != 0){

        if(pass != null && pass != 'undefined' && pass.length != 0){


            alert("Bienvenido " + localStorage.getItem('usuario'));

            window.location = 'ingreso.html';


        }else{
            alert("Ingrese la contraseña de usuario");
        }



    }else{
        alert("Ingrese un nombre de usuario");
    }


}


//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}        
