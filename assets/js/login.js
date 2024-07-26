var clientes = [
    {
        id: 1,
        nombre: "Patricia Torres",
        contraseña: "1234",
        saldo: 1000000,
    },
    {
        id: 2,
        nombre: "Guillermo Wonka",
        contraseña: "2345",
        saldo: 500000,
    },
    {
        id: 3,
        nombre: "Francisco Villa",
        contraseña: "3456",
        saldo: 6000000,
    },
    {
        id: 4,
        nombre: "Frida Calo",
        contraseña: "4567",
        saldo: 2500000,
    },
];
var Usuario = parseInt(prompt("Ingrese ID"));
var Clave = prompt("Ingrese Contraseña");
const login = clientes.find((cliente) => cliente.id === Usuario && cliente.contraseña === Clave);
if (login) {
    alert("Bienvenido " + login.nombre);
    while (true) {
        var opcion = parseInt(prompt("¡Bienvenido a Banca en Línea!\n1.- Ver saldo \n2.- Realizar giro \n3.- Realizar depósito  \n4.- Salir"));
        switch (opcion) {
            case 1:// Opción 1 para ver saldo
                alert("Tu saldo es de: " + login.saldo);
                break;
            case 2:// Opción 2 para realizar giro
                var giro = parseInt(prompt("Ingrese el monto del giro"));
                if (giro <= login.saldo) {
                    login.saldo -= giro;
                    alert("Giro realizado. Su nuevo saldo es " + login.saldo);
                } else {
                    alert("Saldo insuficiente.");
                }
                break;
            case 3:// Opción 3 para realizar depósito
                var deposito = parseInt(prompt("Su saldo actual es: " + login.saldo + "\nIngrese el monto que desea depositar"));
                login.saldo += deposito;
                alert("Depósito realizado. Su nuevo saldo es " + login.saldo);
                break;
            case 4:// Opción 4 para salir
                alert("Muchas gracias por preferir Banca en Línea");
                break;
            default:
                alert("Opción incorrecta");
            }
            if (opcion === 4) {
                break; // Rompe el bucle si la opción es 4 (Salir)
            }
        }
    } else {
        alert("Error. Cliente no existe");
    }