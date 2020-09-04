
function iniciar(){

    //Obtenemos los valores del localStorage
    var usuario = localStorage.getItem('usuario');
    var contra = localStorage.getItem('password');

    document.getElementById("nombre").innerHTML = "Bienvenido " + usuario;
    document.getElementById("contra").innerHTML = "Su contraseña es " + contra;


    var btncerrar = document.getElementById("btnCerrarsesion");
    //Al producirse un click sobre el botón de envío
    //invocar la funcion guardarLocalStorage
    if(btncerrar.addEventListener){
        btncerrar.addEventListener("click", function(){
            cerrarSesionLocalStorage();
        }, false);
        
    }else{

        btncerrar.attachEvent("onclik", function(){
            cerrarSesionLocalStorage();
        });
    }
    
}


function cerrarSesionLocalStorage(){
    
    //Eliminamos los valores de localStore
    localStorage.clear();

    //Redireccionamos a la pagina del login
    window.location = "localStorage.html";
    
    alert("Cerrando sesión...");
}




//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
}        
