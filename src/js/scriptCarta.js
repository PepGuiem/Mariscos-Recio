var contenedores = document.querySelectorAll('.platos');

contenedores.forEach(function (contenedor) {
    for (var i = 0; i < 12; i++) {
        var punto = document.createElement('span');
        punto.className = 'punto';
        punto.innerHTML = '.';
        contenedor.insertBefore(punto, contenedor.children[i + 1]);
    }
});