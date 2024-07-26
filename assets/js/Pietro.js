// Script JavaScript para manejar el formulario de pagos y la lista

// Array para almacenar los pagos registrados
let listaPagos = [];

// Variables para manejar el modo de edición
let modoEdicion = false;
let indiceEdicion = null;

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formulario-pagos');
    const listaPagosElement = document.getElementById('lista-pagos-items');

    // Manejar el evento submit del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        // Obtener valores del formulario
        const nombreCompleto = document.getElementById('nombreCompleto').value.trim();
        const monto = document.getElementById('monto').value.trim();
        const fechaVencimiento = document.getElementById('fechaVencimiento').value.trim();

        // Validar nombre completo
        if (nombreCompleto === '') {
            mostrarError('nombreCompleto', 'Por favor ingresa tu nombre completo.');
            return;
        } else {
            mostrarExito('nombreCompleto');
        }

        // Validar monto
        if (monto === '' || parseFloat(monto) <= 0) {
            mostrarError('monto', 'Por favor ingresa un monto válido.');
            return;
        } else {
            mostrarExito('monto');
        }

        // Validar fecha de vencimiento
        if (fechaVencimiento === '') {
            mostrarError('fechaVencimiento', 'Por favor selecciona la fecha de vencimiento.');
            return;
        } else {
            mostrarExito('fechaVencimiento');
        }

        // Si está en modo edición, actualizar el pago existente
        if (modoEdicion && indiceEdicion !== null) {
            listaPagos[indiceEdicion] = {
                nombreCompleto: nombreCompleto,
                monto: parseFloat(monto),
                fechaVencimiento: fechaVencimiento
            };
            modoEdicion = false;
            indiceEdicion = null;
        } else {
            // Crear objeto con los datos del pago
            const pago = {
                nombreCompleto: nombreCompleto,
                monto: parseFloat(monto),
                fechaVencimiento: fechaVencimiento
            };

            // Agregar el pago al array
            listaPagos.push(pago);
        }

        // Actualizar la lista de pagos en el HTML
        actualizarListaPagos();

        // Limpiar formulario
        formulario.reset();
    });

    // Función para mostrar mensaje de error
    function mostrarError(campo, mensaje) {
        const input = document.getElementById(campo);
        input.classList.add('is-invalid');

        const divInvalidFeedback = input.nextElementSibling;
        divInvalidFeedback.innerText = mensaje;
    }

    // Función para mostrar éxito
    function mostrarExito(campo) {
        const input = document.getElementById(campo);
        input.classList.remove('is-invalid');
    }

    // Función para actualizar la lista de pagos en el HTML
    function actualizarListaPagos() {
        // Limpiar lista actual
        listaPagosElement.innerHTML = '';

        // Recorrer todos los pagos y agregarlos a la lista
        listaPagos.forEach((pago, index) => {
            const li = document.createElement('li');
            li.classList.add('list-group-item');
            li.innerHTML = `
        <strong>${pago.nombreCompleto}</strong> - 
        Monto: ${pago.monto.toFixed(2)} - 
        Fecha de Vencimiento: ${pago.fechaVencimiento}
        <div class="float-end">
          <button type="button" class="btn btn-sm btn-danger me-1" onclick="eliminarPago(${index})">Eliminar</button>
          <button type="button" class="btn btn-sm btn-primary" onclick="cargarPagoParaEdicion(${index})">Editar</button>
        </div>
      `;
            listaPagosElement.appendChild(li);
        });
    }

    // Función para cargar un pago en el formulario para edición
    window.cargarPagoParaEdicion = function (index) {
        const pago = listaPagos[index];
        document.getElementById('nombreCompleto').value = pago.nombreCompleto;
        document.getElementById('monto').value = pago.monto.toFixed(2);
        document.getElementById('fechaVencimiento').value = pago.fechaVencimiento;

        modoEdicion = true;
        indiceEdicion = index;
    };

    // Función para eliminar un pago del array y actualizar la lista
    window.eliminarPago = function (index) {
        listaPagos.splice(index, 1); // Eliminar el pago del array
        actualizarListaPagos(); // Actualizar la lista en el HTML
    };
});
