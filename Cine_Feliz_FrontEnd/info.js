//obtengo la informacion de la pelicula
function init(){
    id = localStorage.getItem('id_movie');
    
    fetch('http://localhost:3000/getMovie', {
        method: 'POST',
        body: JSON.stringify({
            id_movie: id
        }),
        headers: {
            "Content-type": "application/json"
        }}).then(function (res) {
            return res.json();
        }).then(function(data){
            console.log(data.recordset)
        let html = '';
        data.recordset.forEach(function (pelicula) {
            console.log('name'+pelicula.NAME)
            html += `
            <div class="left">
            <img src="${pelicula.IMAGE}" width="95%" height="100%"
                alt="" />
        </div>
        <div class="center">
            <li class="last">
                <h4>${pelicula.NAME}</h4>
                <h5>Protagonista:</h5>
                <p>${pelicula.PROTAGONIST}</p>
                <h5>Secundarios:</h5>
                <p>${pelicula.SECONDARY}</p>
                <h5>Duracion:</h5>
                <p>${pelicula.DURATION}</p>
                <h5>Fecha de Lanzamiento:</h5>
                <p>${pelicula.RELEASE_DATE}</p>
                <h5>Trama:</h5>
                <p>${pelicula.PLOT}</p>
            </li>
        </div>
            `
        });
        // data.forEach(function (peliculas) { 

        // });
        document.getElementById('info').innerHTML = html;

        })
}
//obtengo la informacion de las funciones
function getInfo(){
    id = localStorage.getItem('id_movie');
    date = localStorage.getItem('date');
    fetch('http://localhost:3000/getShows', {
        method: 'POST',
        body: JSON.stringify({
            id_movie: id ,
            fecha: date
        }),
        headers: {
            "Content-type": "application/json"
        }}).then(function (res) {
            return res.json();
        }).then(function(data){
            console.log(data.recordset)
        let html = '';
        data.recordset.forEach(function (funciones) {
            console.log(funciones.NAME)
            html += `
            <button class="boton_personalizado"onClick="goReserv(${funciones.ID_SHOW})">${funciones.FUNTION_DATE} Hrs. </button>
            `
        });
        // data.forEach(function (peliculas) { 

        // });
       document.getElementById('shows').innerHTML = html;

        })
}
function goReserv(id_show){
    localStorage.setItem('id_show',id_show)
    
    location.href="reserv.html";
}
init();

getInfo();