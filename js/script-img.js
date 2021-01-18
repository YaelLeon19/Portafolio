let mesaseleccionada;
let mesa1 = document.querySelector('.mesa1');
let mesa2 = document.querySelector('.mesa2');
let mesa3 = document.querySelector('.mesa3');
let mesa4 = document.querySelector('.mesa4');
let mesa5 = document.querySelector('.mesa5');
let mesa6 = document.querySelector('.mesa6');

mesa1.addEventListener('click', function(e) {
    mesaseleccionada = 1;
    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();

});


mesa2.addEventListener('click', function(e) {
    mesaseleccionada = 2;
    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();
});


mesa3.addEventListener('click', function(e) {
    mesaseleccionada = 3;

    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();
});


mesa4.addEventListener('click', function(e) {
    mesaseleccionada = 4;
    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();
});

mesa5.addEventListener('click', function(e) {
    mesaseleccionada = 5;
    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();
});

mesa6.addEventListener('click', function(e) {
    mesaseleccionada = 6;
    console.log('mesa seleccionada: ' + mesaseleccionada);
    e.stopPropagation();
});