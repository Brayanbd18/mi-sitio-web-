document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const ciudadano = document.getElementById('ciudadano').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const mensajeDiv = document.getElementById('mensaje');

            if (!nombre || !telefono || !ciudadano || !correo) {
                event.preventDefault();
                mensajeDiv.style.color = 'red';
                mensajeDiv.textContent = 'Por favor, complete todos los campos.';
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo)) {
                event.preventDefault();
                mensajeDiv.style.color = 'red';
                mensajeDiv.textContent = 'Por favor, ingrese un correo electrónico válido.';
                return;
            }

            const phoneRegex = /^[0-9]{7,15}$/;
            if (!phoneRegex.test(telefono)) {
                event.preventDefault();
                mensajeDiv.style.color = 'red';
                mensajeDiv.textContent = 'Por favor, ingrese un número de teléfono válido (7-15 dígitos).';
                return;
            }

            mensajeDiv.textContent = '';
        });
    }
});
