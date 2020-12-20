

function init() {
    idShow = localStorage.getItem('id_show');
    idSeat = localStorage.getItem('id_seat');
    console.log(idSeat)
    fetch('http://localhost:3000/validate', {
        method: 'POST',
        body: JSON.stringify({
            id_show: idShow,
            id_seat: idSeat
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(function (res) {
        return res.json();
    }).then(function (data) {
        console.log(data.recordset)
        let html = '';
        data.recordset.forEach(function (validate) {
            console.log('name' + validate.NAME)
            html += `
            <div class="left">
            <img src="${validate.IMAGE}" width="95%" height="100%"
                alt="" />
        </div>
        <div class="center">
            <li class="last">
                <h4 id="nombre">${validate.NAME}</h4>
                <h5>Protagonista:</h5>
                <p>${validate.PROTAGONIST}</p>
                <h5>Duracion:</h5>
                <p>${validate.DURATION}</p>
                <h5>Fecha de Funcion:</h5>
                <p>${validate.FUNTION_HOUR}</p>
                <h5>Hora:</h5>
                <p id="hora">${validate.FUNTION_DATE}</p>
                <h5>Sala:</h5>
                <p id="sala">${validate.NUMBER}</p>
                <h5>Asiento Seleccionado:</h5>
                <p id="seat">${validate.SEAT}</p>
                <h5>Fila:</h5>
                <p id="row">${validate.ROW_CINEMA}</p>
            </li>
        </div>
            <div class="right">
                <label>Nombre:</label> 
                    <input type="text" id="name" placeholder="Nombre">
                    <label>Tarjeta de credito</label>
                    <input type="numeric"
                    
                        id="creditcard"
                        maxlength="19"
                        placeholder="Número de tarjeta de credito"
                    />
                    <input type="numeric"
                        id="code"
                        maxlength="4"
                        placeholder="No. de Seguridad"
                    />
                    <br><br><br><br>
                    <button class="boton_personalizado"
                    onClick="GenerarPase('${validate.NAME}','${validate.NUMBER}','${validate.ROW_CINEMA}','${validate.FUNTION_DATE}')">
                    Realizar Compra
                    </button>
            </div>`
        });
        // data.forEach(function (peliculas) { 
        // });
        document.getElementById('info').innerHTML = html;

    })
}
function GenerarPase(name_movie, sala, fila, hora) {
    console.log("llego aqui")
    var nombre = document.getElementById("name").value;
    var creditCard = document.getElementById("creditcard").value;
    var code = document.getElementById("code").value;
    var date = localStorage.getItem("date");

    var doc = new jsPDF('landscape');
    if (nombre == '') window.alert("Ingrese su nombre");
    else if (creditCard == "") window.alert("Ingrese su Numero de Tarjeta");
    else if (code == '') window.alert("Ingrese su Codigo de seguridad");
    else {
        doc.addFont('ComicSansMS', 'Comic Sans', 'normal');
        doc.setFont('Comic Sans');
        doc.setFontSize(40);
        doc.text(100, 20, 'CINE FELIZ!');
        //var logo = 'data:image/jpeg;base64,'+ Base64.encode('logo.jpg');
        //logo.src = 'logo.jpg';
        //doc.addImage(logo, 'JPEG', 15, 40,148,210);
        doc.setFontSize(25);
        doc.text(20, 40, '* Entrada personalizada de Cine Feliz, por favor presentarse en ventanilla ')
        doc.text(20, 50, '15 minutos antes de la hora de la funcion con un documento que acredite ')
        doc.text(20, 60, 'la propiedad de la entrada. *');
        doc.addFont('bromellonavidadregular', 'bromellonavidadregular', 'normal');
        doc.setFont("bromellonavidadregular");
        doc.setFontSize(20);
        doc.text(20, 80, 'NOMBRE: ' + nombre);
        doc.text(20, 100, 'PELICULA: ' + name_movie);
        doc.text(20, 120, 'FECHA DE FUNCION: ' + date);
        doc.text(20, 140, 'HORA: ' + hora + ' Hrs.');
        doc.text(20, 160, 'SALA: ' + sala);
        doc.text(20, 180, 'FILA: ' + fila);
        idShow = localStorage.getItem("id_show")
        idSeat = localStorage.getItem("id_seat")
        doc.save('Entrada_'+date+'.pdf');
        fetch('http://localhost:3000/newReservation', {
            method: 'POST',
            body: JSON.stringify({
                id_show: idShow,
                id_seat: idSeat,
                name : nombre,
                card : creditCard
            }),
            headers: {
                "Content-type": "application/json"
            }
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data)
           
                //console.log(JSON.stringify(validate))
                if (data) {
                    location.href = "reserv.html";
                }
                else window.alert("ERROR AL COMPRAR");
            
            // data.forEach(function (peliculas) { 
            // });
            document.getElementById('info').innerHTML = html;

        })
    }

}
history.forward(1);
init();