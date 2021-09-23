// var nombre_user = document.getElementById('nombre_usuario')
// var anoNacim_user = document.getElementById('contrasena_usuario')
// var password_user = document.getElementById('nombre_usuario')

function validar_nombre_usuario(string) {
    var regularExpression  = /([A-Za-z]$)/g;

    if (regularExpression.test(string)) {
        
        if (string[0] === string[0].toUpperCase()) {
            return true
        }
    }
    return false
}

function validar_anoNacimiento_usuario(valor) {

    if (typeof(valor) == "number"){
        
        if (valor > 0) {

            if(valor >= 1900 && valor <= 2022) {

                return true
            }
        }
    }
    return false
}

function validar_contrasena(string) {

    var regularExpression  = /(([0-9]{1,}[A-Za-z]{1,})|[0-9]$)/g;
    var letrasMin="abcdefghyjklmnñopqrstuvwxyz";
    var letrasMayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
    var nums = "0123456789"

    if (string.length >= 6) {
        
        for(i = 0; i < string.length; i++){

            if (letrasMin.indexOf(string.charAt(i),0)!=-1){
                
                for(j = 0; j < string.length; j++){

                    if (letrasMayus.indexOf(string.charAt(j),0)!=-1){

                        for(n = 0; n < string.length; n++){

                            if (nums.indexOf(string.charAt(n),0)!=-1){
        
                                if (regularExpression.test(string)) {

                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return false
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena = validar_contrasena;
module.exports.validar_anoNacimiento_usuario = validar_anoNacimiento_usuario;