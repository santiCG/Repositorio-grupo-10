var medicamentos = [{'nombre': 'ibuprofeno', 'via': 'oral', 'periodo': '8 horas'}, 'acetaminofen', 'mieltertos']

function buscar() {

    var input = document.getElementById('input_busqueda').value
    var result = document.getElementById('resultados')

    for (var i = 0; i < medicamentos.length; i++) {
        toString(input).toLowerCase()
        
        if (input == medicamentos[i].nombre) {
            console.log('entro')
            result.innerHTML += '<div id="form_result">' +
                                    '<label for="name"><strong>Nombre:</strong> ' + medicamentos[i].nombre + '</label> <br>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="way"><strong>Via:</strong> ' + medicamentos[i].via +'</label> <br>'+
                                    '<div style="height: 10px;"></div>' +
                                    '<label for="time"><strong>Intervalo entre dosis:</strong> ' + medicamentos[i].periodo +'</label> <br>'+ 
                                    '<input type="number" class="cambiar_dato" placeholder="Cambiar intervalo (opcional)"> <br>'+
                                    '<label for="extra-data"><strong>Datos adicionales:</strong></label> <br>'+
                                    '<input type="text" class="cambiar_dato" placeholder="opcional"> <br>'+
                                    '<label for="extra-data"><strong>Empezar el día:</strong></label> <br>'+
                                    '<input type="date" class="cambiar_dato"> <br>'+
                                    '<div id="hora_med">' +
                                        '<div>'+
                                            '<label for="extra-data"><strong>Hora:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="a que hora deseas iniciar?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>Minutos:</strong></label> <br>'+
                                            '<input type="number" class="cambiar_dato" placeholder="en que minuto?"> <br>'+
                                        '</div>'+
                                        '<div>'+
                                            '<label for="extra-data"><strong>AM / PM:</strong></label> <br>'+
                                            '<select name="" id="ampm">'+
                                                '<option value="am">AM</option>'+
                                                '<option value="pm">PM</option>'+
                                            '</select>'+
                                        '</div>'+
                                    '</div>'+
                                    '<center><button id="anadir_med" onclick="validar_datos_med()">Añador Recordatorio</button></center>'+
                                '</div>'
            break
        }
    }
}