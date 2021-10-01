let registros = [];

function agregarRegistro() {

    var nombre_user = document.getElementById('nombre_usuario').value
    var anoNacim_user = document.getElementById('anoNacimiento_usuario').value
    var password_user = document.getElementById('contrasena_usuario').value

    // if (validar_nombre_usuario(x)) {

    //     if (validar_anoNacimiento_usuario(parseInt(y))) {

    //         if (validar_contrasena(z)) {

                registros.push({'usuario' : nombre_user,'anoNacimiento': anoNacim_user,'contrasena' : password_user})
                console.log(registros[registros.length - 1])
    //         }
    //     }
    // }
}

// function EncontrarUsuarioPorEdad(arreglo) {

//     var usuarioMayorEdad = [];
//     var n = arreglo.length

//     for (var i = 0; i < n; i += 2) {

//         try {
//             if (arreglo[i].anoNacimiento < arreglo[i + 1].anoNacimiento) {
//                 usuarioMayorEdad.push(arreglo[i])
//             }
//             else {
//                 usuarioMayorEdad.push(arreglo[i + 1])
//             }   
//         }
//         catch {
//             usuarioMayorEdad.push(arreglo[i])
//         }
//     }
//     console.log(usuarioMayorEdad)

//     if (usuarioMayorEdad.length > 1) {
//         EncontrarUsuarioPorEdad(usuarioMayorEdad)        
//     } 
//     else {
//         console.log(usuarioMayorEdad[0]);
//         return usuarioMayorEdad[0];
//     }
// }

function EncontrarUsuarioPorEdad(arreglo) {
    usuarioMayor="";
    var edadMayor=2023;
    arreglo.forEach(element => {

        if(element.anoNacimiento <= edadMayor){
            edadMayor = element.anoNacimiento;
            usuarioMayor =  element;
        }
    });
    console.log(usuarioMayor)
    return usuarioMayor;
}

module.exports.registros = registros;
module.exports.EncontrarUsuarioPorEdad = EncontrarUsuarioPorEdad;
module.exports.agregarRegistro = agregarRegistro;

// function validar_nombre_usuario(string) {
//     var regularExpression  = /([A-Za-z]$)/g;

//     if (regularExpression.test(string)) {
        
//         if (string[0] === string[0].toUpperCase()) {
//             return true
//         }
//     }
//     return false
// }

// function validar_anoNacimiento_usuario(valor) {

//     if (typeof(valor) == "number"){

//         if(valor >= 1900 && valor <= 2022) {
//             return true
//         }
//     }
//     return false
// }

// function validar_contrasena(string) {

//     var regularExpression  = /(([0-9]{1,}[A-Za-z]{1,})|[0-9]$)/g;

//     var letrasMin="abcdefghyjklmnñopqrstuvwxyz";
//     var letrasMayus="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
//     var nums = "0123456789"

//     if (string.length >= 6) {
        
//         for(i = 0; i < string.length; i++){

//             if (letrasMin.indexOf(string.charAt(i),0) != -1){
                
//                 for(j = 0; j < string.length; j++){

//                     if (letrasMayus.indexOf(string.charAt(j),0) != -1){

//                         for(n = 0; n < string.length; n++){

//                             if (nums.indexOf(string.charAt(n),0) != -1){
        
//                                 if (regularExpression.test(string)) {

//                                     return true
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return false
// }