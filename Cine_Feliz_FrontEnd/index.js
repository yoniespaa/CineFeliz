
//let peliculas;

function init() {
    var fecha = document.getElementById("start").value;
    console.log('fecha: '+fecha)
    //if(fecha=="2018-07-22"){
      //  getCartelera();
    //}else

    var f = new Date();
    let date = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();

    let hora = `<input type="date" id="start" name="trip-start"
    value="${date}"
    min="${date}" max="2021-12-31" onchange="getCartelera()" >`

    document.getElementById("calendario").innerHTML = hora;
    fetch('http://localhost:3000/all')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data.recordset)
            let html = '';
            data.recordset.forEach(function (peliculas) {
                console.log(peliculas.NAME)
                html += `<li class="last">
            <h4>${peliculas.NAME} </h4>
            <div class="auto" id="id_movie" style="display: none">${peliculas.ID_MOVIE}</div>
            <img src="${peliculas.IMAGE}" width="275" height="350" alt="" />
            <p></p>
            <H8> PROTAGONISTA: ${peliculas.PROTAGONIST}</H8>
            <p></p>
            <H8> JUNTO A: ${peliculas.SECONDARY}</H8>
            <p></p>
            <H8> DURACION: ${peliculas.DURATION}</H8>
            <p></p>
            <button  class="boton" onclick="InfoPage(${peliculas.ID_MOVIE})">
            <div class="wrapper"><a  class="link2"><span><span>MAS INFORMACION...</span></span></a></div>
            </button>
        </li>`
            });
            // data.forEach(function (peliculas) { 

            // });
            document.getElementById('Movies').innerHTML = html;
        })

    //this.peliculas = fetch('http://localhost:3000/all')
    //.then(response => response.json())
    //.then(data => data ).then(recordsets => recordsets)

    //document.write('<h1>'+peliculas+'</h1>')
    //document.write('<h1>'+data+'</h1>')
    //console.log(this.peliculas)
}

function getCartelera() {
    console.log('llego aqui')
    // {"fecha":"1995-01-01"}
   var date = document.getElementById("start").value;
    //if(this.date==""){
    //this.date = localStorage.getItem("date");    
   // }
    console.log('fecha' + date)

    fetch('http://localhost:3000/getListings', {
        method: 'POST',
        body: JSON.stringify({
            fecha: date,
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data.recordset)
        let html = '';
        data.recordset.forEach(function (peliculas) {
            console.log(peliculas.NAME)
            html += `<li class="last">
        <h4>${peliculas.NAME} </h4>
        <div class="auto" id="id_movie" style="display: none">${peliculas.ID_MOVIE}</div>
        <img src="${peliculas.IMAGE}" width="275" height="350" alt="" />
        <p></p>
        <H8> PROTAGONISTA: ${peliculas.PROTAGONIST}</H8>
        <p></p>
        <H8> JUNTO A: ${peliculas.SECONDARY}</H8>
        <p></p>
        <H8> DURACION: ${peliculas.DURATION}</H8>
        <p></p>
        <button class="boton" onclick="InfoPage(${peliculas.ID_MOVIE})">
        <div class="wrapper"><a class="link2"><span><span>MAS INFORMACION...</span></span></a></div>
        </button>
    </li>`
        });
        // data.forEach(function (peliculas) { 

        // });
        document.getElementById('Movies').innerHTML = html;
    })

}
function InfoPage(id){
console.log(id)

var date = document.getElementById("start").value;
console.log(date)

if(date==""){
    
window.alert("Ingrese una fecha para continuar");


    console.log("seleccione fecha")
}
else{
localStorage.setItem('id_movie', id);
localStorage.setItem('date', date);
location.href="info.html";
}
}
history.forward(1);
init();

