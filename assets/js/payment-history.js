$(document).ready(function() {
    const paymentData = {
        1: [
            { concepto: 'Matrícula', monto: '$10000', fecha: '01/01/2024' },
            { concepto: 'Mensualidad Enero', monto: '$5000', fecha: '15/01/2024' }
        ],
        2: [
            { concepto: 'Matrícula', monto: '$10000', fecha: '02/01/2024' },
            { concepto: 'Mensualidad Enero', monto: '$5000', fecha: '16/01/2024' }
        ],
        3: [
            { concepto: 'Matrícula', monto: '$10000', fecha: '03/01/2024' },
            { concepto: 'Mensualidad Enero', monto: '$5000', fecha: '17/01/2024' }
        ]
    };

    $('#historyForm').on('submit', function(event) {
        event.preventDefault();
        let studentId = $('#studentSelect').val();
        if (!studentId) {
            $('#paymentHistory').html('<div class="alert alert-danger">Por favor, selecciona un estudiante.</div>');
            return;
        }

        let payments = paymentData[studentId];
        if (!payments || payments.length === 0) {
            $('#paymentHistory').html('<div class="alert alert-warning">No hay pagos registrados para este estudiante.</div>');
            return;
        }

        let historyTable = `
            <h4>Histórico de Pagos</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
        `;

        payments.forEach(payment => {
            historyTable += `
                <tr>
                    <td>${payment.concepto}</td>
                    <td>${payment.monto}</td>
                    <td>${payment.fecha}</td>
                </tr>
            `;
        });

        historyTable += `
                </tbody>
            </table>
        `;

        $('#paymentHistory').html(historyTable);
    });
});
