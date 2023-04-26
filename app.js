'use strict'; // para obtener errores mas utiles al comerter equivocaciones.


// usa selectores de CSS, igual que los que ha usado en el archivo CSS. switcher ahora es una referencia al botón de la página.
const switcher = document.querySelector('.btn');

// el controlador de eventos para el evento click. En el código siguiente, agregue un cliente de escucha para el evento click y defina una función de controlador de eventos que el explorador ejecutará cuando se produzca el evento click.
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    //ha usado el método toggle para modificar el atributo de clase del elemento <body>. Este método agrega o quita automáticamente las clases light-theme y dark-theme.

    // es necesario actualizar la etiqueta del botón para mostrar el tema correcto, por lo que debe agregar una instrucción if para determinar el tema actual y actualizar la etiqueta del botón
    const className = document.body.className;
    if(className == 'light-theme') {
        this.textContent = "Dark";
    }else {
        this.textContent = "Light";
    }

    //El uso de mensajes de consola es útil para ver el resultado del código.
    console.log('current class name: ' + className);

});













