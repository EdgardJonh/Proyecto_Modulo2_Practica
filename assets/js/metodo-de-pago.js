const credi = document.getElementById("credito");
const debi = document.getElementById("debito");
const tranf = document.getElementById("tranfer");

const padreForm = document.getElementById("padreForm");

document.addEventListener("click", function (e) {
  const formu = `   <form id="formulario-usuario"> 
                            <div class="form-group">
                                <label for="nombre">Nombre del titular:</label>
                                <input type="text" class="form-control" id="nombre">
                            </div>
                            <div class="form-group">
                                <label for="numero_tarjeta">Número de tarjeta:</label>
                                <input type="number" class="form-control" id="numero_tarjeta" >
                            </div>
                            <div class="form-group">
                                <label for="fecha_vencimiento">Fecha de vencimiento:</label>
                                <input type="month" class="form-control" id="fecha_vencimiento" >
                            </div>
                            <div class="form-group">
                                <label for="codigo_seguridad">Código de seguridad:</label>
                                <input type="number" class="form-control" id="codigo_seguridad">
                            </div>
                            <div id="mensaje-confirmacion"></div>
                            <button type="submit" class="btn btn-primary mt-2">Realizar pago</button>
                        </form>`
  if (e.target.id == "credito") {
    padreForm.innerHTML = `Seccion Credito ${formu}`;
  }

  const formulario = document.getElementById("formulario-usuario");
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    const nombre = document.getElementById("nombre").value;
    const numero_tarjeta = document.getElementById("numero_tarjeta").value;
    const fecha_vencimiento =
      document.getElementById("fecha_vencimiento").value;
    const codigo_seguridad = document.getElementById("codigo_seguridad").value;
    if (
      nombre !== "" &&
      numero_tarjeta !== "" &&
      fecha_vencimiento !== "" &&
      codigo_seguridad !== ""
    ) {
      mensajeConfirmacion.innerHTML = '<p class="text-success">Datos enviados</p>';
    } else {
      mensajeConfirmacion.innerHTML = '<p class="text-danger">Debes rellenar todos los campos.</p>';
    }
  });
  if (e.target.id == "debito") {
    padreForm.innerHTML = `Seccion Debito ${formu}`;
  }
  if (e.target.id == "tranfer") {
    padreForm.innerHTML = `<form>
		<div class="form-group row">
		  <label for="staticEmail" class="col-sm-2 col-form-label">Nombre</label>
		  <div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Colegio E-BootCamp">
		  </div>
		</div>
    <div class="form-group row">
		  <label for="staticEmail" class="col-sm-2 col-form-label">RUT</label>
		  <div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="45.343.343-3">
		  </div>
		</div>
    <div class="form-group row">
		  <label for="staticEmail" class="col-sm-2 col-form-label">Cuenta</label>
		  <div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="12434353">
		  </div>
		</div>
    <div class="form-group row">
		  <label for="staticEmail" class="col-sm-2 col-form-label">Banco</label>
		  <div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="Banco Estado">
		  </div>
		</div>
     <div class="form-group row">
		  <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
		  <div class="col-sm-10">
			<input type="text" readonly class="form-control-plaintext" id="staticEmail" value="E-bootCamp@e-camp.cl">
		  </div>
		</div>
		
	  </form>`;
  }
});
