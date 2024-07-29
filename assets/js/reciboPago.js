const estudiantes = [
    { id: 1, nombre: 'Roberto Hernandez' },
    { id: 2, nombre: 'Maria Garcia' },
    { id: 3, nombre: 'Martin Gutierrez' },
    { id: 4, nombre: 'Juan Perez' }
];

const conceptoPagos = [
    { id: 1, concepto: 'Matrícula', monto: 78000 },
    { id: 2, concepto: 'Mensualidad', monto: 150000 },
    { id: 3, concepto: 'Practica', monto: 90000 }
];

// Completa las opciones de seleccion de estudiantes
estudiantes.forEach(estudiante => {
    $('#seleccionarEstudiante').append
    (`<option value="${estudiante.id}">${estudiante.nombre}</option>`);
});

// Completa las opciones de seleccion de conceptos de pago
conceptoPagos.forEach(concepto => {
    $('#seleccionarConceptoPago').append
    (`<option value="${concepto.id}">${concepto.concepto}</option>`);
});

// Actualiza monto a pagar cuando un pago es seleccionado
$('#seleccionarConceptoPago').change(function() { 
    const conceptoSeleccionado = conceptoPagos.find
    (conceptoPagos => conceptoPagos.id == $(this).val());
    $('#montoPago').val(conceptoSeleccionado ? conceptoSeleccionado.monto : '');
});

// Manejo de eventos para generar e imprimir el recibo
$('#generaRecibo').submit(function(e) {
    e.preventDefault();

    const estudianteSeleccionado = estudiantes.find
        (estudiante => estudiante.id == $('#seleccionarEstudiante').val());

    const conceptoSeleccionado = conceptoPagos.find
        (concepto => concepto.id == $('#seleccionarConceptoPago').val());
        
    const monto = $('#montoPago').val();

    if (estudianteSeleccionado && conceptoSeleccionado && monto) {
        $('#vistaRecibo').html(`
            <h3>Recibo de Pago</h3>
            <p>Estudiante: ${estudianteSeleccionado.nombre}</p>
            <p>Concepto de Pago: ${conceptoSeleccionado.concepto}</p>
            <p>Monto a Pagar: $${monto}</p>
        `).show();
        $('#imprimeRecibo').show();
    }
});

// Manejo la impresión del recibo
$('#imprimeRecibo').click(function() {
    window.print();
});


