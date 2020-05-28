var accion = document.getElementById('operaciones');

accion.addEventListener('click', function () {

    var operacion = prompt('Depositar o Extraer');
        
    if (operacion == 'depositar') {
    
        var montoDeposito = prompt('Ingresar monto');
    
        document.getElementById('monto').innerHTML = 'Saldo $ ' + montoDeposito;

    } else if (operacion == 'extraer') {

        var montoExtraccion = prompt('Ingrese monto');

        document.getElementById('monto').innerHTML = 'Saldo $ ' + montoExtraccion;

    } else {

        prompt('Depositar o Extraer');

    }
})

// var abrir = document.getElementById('operaciones');

// abrir.addEventListener('click', function () {

//     document.getElementById('popUp').style.display ='block';
    
// })