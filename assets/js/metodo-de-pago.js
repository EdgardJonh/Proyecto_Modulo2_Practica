const credi = document.getElementById('credito').value
const debi = document.getElementById('debito').value
const tranf = document.getElementById('tranfer').value

const padreForm = document.getElementById('padreForm')

document.addEventListener('click',function(e){
    console.log(e.target.value)
    if (e.target.value == 'credito') {
        padreForm.innerHTML=`     <form>
                            <div class="form-group">
                                <label for="nombre">Nombre del titular:</label>
                                <input type="text" class="form-control" id="nombre" required>
                            </div>
                            <div class="form-group">
                                <label for="numero_tarjeta">Número de tarjeta:</label>
                                <input type="number" class="form-control" id="numero_tarjeta" required>
                            </div>
                            <div class="form-group">
                                <label for="fecha_vencimiento">Fecha de vencimiento:</label>
                                <input type="month" class="form-control" id="fecha_vencimiento" required>
                            </div>
                            <div class="form-group">
                                <label for="codigo_seguridad">Código de seguridad:</label>
                                <input type="number" class="form-control" id="codigo_seguridad" required>
                            </div>
                            <button type="submit" class="btn btn-primary mt-2">Realizar pago</button>
                        </form>`
    }
    if(e.target.value == 'debito'){
        padreForm.innerHTML= `seccion debito`
    }
    if(e.target.value == 'tranfer'){
        padreForm.innerHTML= `seccion tranferencia`
    }
})
console.log(credi)