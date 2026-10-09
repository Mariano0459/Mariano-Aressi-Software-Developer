document.addEventListener('DOMContentLoaded', () => {
    // ===== NAVEGACIÓN CON SCROLL SUAVE =====
    const botonesNav = document.querySelectorAll('.btn-nav');

    botonesNav.forEach(boton => {
        boton.addEventListener('click', () => {
            const targetId = boton.getAttribute('data-target');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                }); 
            }
        });
    });

    // ===== EFECTO DE TIPEO =====
    const frases = [
        'desarrollador de software.',
        'estudiante de ICES.',
        'un eterno curioso.'
    ];

    const elementoTexto = document.querySelector('#typing-text');

    if (elementoTexto) {
        const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reducirMovimiento) {
            elementoTexto.textContent = frases[0];
        } else {
            let indiceFrase = 0;
            let indiceLetra = 0;
            let borrando = false;

            const VELOCIDAD_ESCRIBIR = 80;
            const VELOCIDAD_BORRAR = 40;
            const PAUSA_AL_TERMINAR = 1500;
            const PAUSA_ANTES_DE_ESCRIBIR = 400;

            function escribir() {
                const fraseActual = frases[indiceFrase];

                if (!borrando) {
                    indiceLetra++;
                    elementoTexto.textContent = fraseActual.slice(0, indiceLetra);

                    if (indiceLetra === fraseActual.length) {
                        borrando = true;
                        setTimeout(escribir, PAUSA_AL_TERMINAR);
                        return;
                    }
                    setTimeout(escribir, VELOCIDAD_ESCRIBIR);
                } else {
                    indiceLetra--;
                    elementoTexto.textContent = fraseActual.slice(0, indiceLetra);

                    if (indiceLetra === 0) {
                        borrando = false;
                        indiceFrase = (indiceFrase + 1) % frases.length;
                        setTimeout(escribir, PAUSA_ANTES_DE_ESCRIBIR);
                        return;
                    }
                    setTimeout(escribir, VELOCIDAD_BORRAR);
                }
            }

            escribir();
        }
    }
});