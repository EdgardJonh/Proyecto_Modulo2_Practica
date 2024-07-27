const pagos = [
    { nombre: "Juan Pérez", concepto: "Matrícula", monto: 500, fechaVencimiento: "2024-07-20"},
    { nombre: "Ana Gómez", concepto: "Libros", monto: 150, fechaVencimiento: "2024-07-25"},
    { nombre: "Luis Ramírez", concepto: "Uniforme", monto: 200, fechaVencimiento: "2024-07-15"},
    { nombre: "María Torres", concepto: "Excursión", monto: 100, fechaVencimiento: "2024-08-01"}
];

function generarReporte() {
    const reportType = document.getElementById('reportType').value;
    const reportContainer = document.getElementById('reportContainer');
    const today = new Date();
    reportContainer.innerHTML = '';

    let filteredPagos;
    if (reportType === 'pendientes') {
        filteredPagos = pagos.filter(pago => new Date(pago.fechaVencimiento) > today);
    } else if (reportType === 'retrasados') {
        filteredPagos = pagos.filter(pago => new Date(pago.fechaVencimiento) <= today);
    }

    if (filteredPagos.length === 0) {
        reportContainer.innerHTML = `<p>No hay pagos ${reportType}.</p>`;
        return;
    }

    let table = `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Nombre del Estudiante</th>
                    <th>Concepto de Pago</th>
                    <th>Monto</th>
                    <th>Fecha de Vencimiento</th>
                    ${reportType === 'retrasados' ? '<th>Tiempo de Retraso</th>' : ''}
                </tr>
            </thead>
            <tbody>
    `;

    filteredPagos.forEach(pago => {
        const fechaVencimiento = new Date(pago.fechaVencimiento);
        let tiempoRetraso = '';

        if (reportType === 'retrasados') {
            const diffTime = Math.abs(today - fechaVencimiento);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            tiempoRetraso = `<td>${diffDays} días</td>`;
        }

        table += `
            <tr>
                <td>${pago.nombre}</td>
                <td>${pago.concepto}</td>
                <td>$${pago.monto}</td>
                <td>${pago.fechaVencimiento}</td>
                ${tiempoRetraso}
            </tr>
        `;
    });

    table += `
            </tbody>
        </table>
    `;

    reportContainer.innerHTML = table;
}

