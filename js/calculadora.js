const botonNumeros = document.getElementsByName('data-number');
const botonopera = document.getElementsByName('data-opera');
const botonigual = document.getElementsByName('data-igual')[0];
const botondelete = document.getElementsByName('data-delete')[0];
var resultado = document.getElementById('result');

var operaActual = '';
var operaAnte = '';
var operacion = undefined;

botonNumeros.forEach(function(boton) {
    boton.addEventListener('click', function() {
        agregarumero(boton.innerText);
    });
});

botonopera.forEach(function(boton) {
    boton.addEventListener('click', function() {
        selectopera(boton.innerText);
    });
});

botonigual.addEventListener('click', function() {
    calcular();
    actualizar_display();
});

botondelete.addEventListener('click', function() {
    clear();
    actualizar_display();
});

function agregarumero(num) {
    operaActual = operaActual.toString() + num.toString();
    actualizar_display();
}

function actualizar_display() {
    resultado.value = operaActual;
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operaAnte);
    const actual = parseFloat(operaActual);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case '+':
            calculo = anterior + actual;
            break;

        case '-':
            calculo = anterior - actual;
            break;

        case 'x':
            calculo = anterior * actual;
            break;

        case '/':

            if (actual !== 0) {
                calculo = anterior / actual;
            } else {
                alert("Error: Ningun numero se puede dividir entre 0");
            }
            break;
    }

    operaActual = calculo;
    operacion = undefined;
    operaAnte = '';
}

function selectopera(op) {
    if (operaActual === '') return;
    if (operaAnte !== '') {
        calcular();
    }

    operacion = op.toString();
    operaAnte = operaActual;
    operaActual = '';
}

function clear() {
    operaActual = '';
    operaAnte = '';
    operacion = undefined;
}