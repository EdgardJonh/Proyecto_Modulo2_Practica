$(document).ready(function() {
    $('#studentForm').on('submit', function(event) {
        event.preventDefault();

        const fullName = $('#fullName').val();
        const birthDate = $('#birthDate').val();
        const address = $('#address').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const grade = $('#grade').val();
        const section = $('#section').val();

        if (validateForm(fullName, birthDate, address, phone, email, grade, section)) {
            // Aquí iría la lógica para enviar los datos al servidor

            // Mostrar mensaje de confirmación
            $('#confirmationMessage').show();

            // Limpiar formulario
            $('#studentForm')[0].reset();
        } else {
            alert('Por favor, llena todos los campos correctamente.');
        }
    });

    function validateForm(fullName, birthDate, address, phone, email, grade, section) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d{9}$/;

        if (!fullName || !birthDate || !address || !phone || !email || !grade || !section) {
            return false;
        }

        if (!emailPattern.test(email)) {
            return false;
        }

        if (!phonePattern.test(phone)) {
            return false;
        }

        return true;
    }
});
