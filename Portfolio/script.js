document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los botones que tienen la clase 'btn-nav'
    const botonesNav = document.querySelectorAll('.btn-nav');

    botonesNav.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Obtener el ID del objetivo desde el atributo 'data-target'
            const targetId = boton.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Realizar el scroll suave hasta la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});