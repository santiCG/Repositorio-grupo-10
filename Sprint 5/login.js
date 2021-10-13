let registros = []

function validar_captcha(rcaptcha) {

    if(rcaptcha == 16 || rcaptcha == '16') {
        return true
    }
    else {
        return false
    }
}

function iniciar_sesion(usuario, contrasena, rcaptcha) {

    for(var i = 0; i < registros.length; i++) {

        if(registros[i].usuario == usuario && registros[i].contrasena == contrasena) {

            if(validar_captcha(rcaptcha)) {
                return true
            }
            else {
                return false
            }
        }
    }
    return false
}

module.exports.registros = registros
module.exports.validar_captcha = validar_captcha
module.exports.iniciar_sesion = iniciar_sesion
