var boton = document.getElementById('simular');

boton.addEventListener('click', function () {
    var capital = document.getElementById('c').value;
    
    var tasa = document.getElementById('i').value;
    
    var tiempo = document.getElementById('t').value;

    var interes = '$ ' + (capital * (tasa / 100) * (tiempo / 365)).toFixed(2);

    alert(interes);
})

function limpiar() {
    document.getElementById('c').value = ' ';
    document.getElementById('i').value = ' ';
    document.getElementById('t').value = ' ';
}