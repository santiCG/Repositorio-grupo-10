var medicamentos = [{'nombre': 'ibuprofeno', 'via': 'oral', 'periodo': '8 horas', 'foto': }, 'acetaminofen', 'mieltertos']

function buscar() {

    var input = document.getElementById('input_busqueda').value
    var result = document.getElementById('resultados')

    for (var i = 0; i < medicamentos.length; i++) {
        toString(input).toLowerCase()
        
        if (input == medicamentos[i].nombre) {
            console.log('entro')
            result.innerHTML += '<div id="lado_izq">' +
                                    '<label for="name">' + medicamentos[i].foto + '</label> <br>'+ 
                                    '</div> <div id="lado_drh">' +
                                        '<label for="name">' + input + '</label> <br>'+ 
                                        '<label for=""></label> <br>'+
                                        '<label for="altura">Estatura</label> <br>'+ 
                                        '<input type="number" id="nombre_usuario"> <br>'+
                                        '<label for="tipo">¿Eres un profesional de la salud?</label><br><div id="salud_si"></div></div>'
            return 0
        }
    }
    console.log(0)
}