$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        let email = $('#loginEmail').val();
        let password = $('#loginPassword').val();

        // Simulación de validación de credenciales
        if (email === 'test@example.com' && password === 'password') {
            window.location.href = 'dashboard.html';
        } else {
            $('#loginError').text('Credenciales incorrectas.');
        }
    });

    $('#registerForm').on('submit', function(event) {
        event.preventDefault();
        let name = $('#registerName').val();
        let email = $('#registerEmail').val();
        let password = $('#registerPassword').val();
        let confirmPassword = $('#registerConfirmPassword').val();

        if (password === confirmPassword) {
            $('#registerSuccess').text('Usuario registrado correctamente.');
            $('#registerForm')[0].reset();
        } else {
            $('#registerSuccess').text('Las contraseñas no coinciden.').addClass('text-danger');
        }
    });
});
