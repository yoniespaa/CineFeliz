
function getInfo(){
    show = localStorage.getItem('id_show');
    //date = localStorage.getItem('date');
    fetch('http://localhost:3000/availability', {
        method: 'POST',
        body: JSON.stringify({
            id_show: show
        }),
        headers: {
            "Content-type": "application/json"
        }}).then(function (res) {
            return res.json();
        }).then(function(data){
            console.log(data.recordset)
        let row1 = '<th  style="background-color:red" scope="row">Fila 1</th>';
        let row2 = '<th  style="background-color:red"scope="row">Fila 2</th>';
        let row3 = '<th  style="background-color:red"scope="row">Fila 3</th>';
        let row4 = '<th style="background-color:red" scope="row">Fila 4</th>';
        data.recordset.forEach(function (seat) {
            if(seat.ROW_CINEMA==1){
            if(seat.DISP==0){
                row1 +=`
                <td class="vacio">
                <button class="boton" onclick="reservPage(${seat.ID_SEAT})">
                <div class="wrapper"><a class="link2"><span><span>
                ${seat.SEAT}
                </span></span></a></div>
                </button>
                </td>   `

            }else if(seat.DISP==1){
                row1 +=`
                <td class="ocupado" >${seat.SEAT}</td> `

            }
            console.log(seat.SEAT)
        }
        if(seat.ROW_CINEMA==2){
            if(seat.DISP==0){
                row2 +=`
                <td class="vacio">
                <button class="boton" onclick="reservPage(${seat.ID_SEAT})">
                <div class="wrapper"><a class="link2"><span><span>
                ${seat.SEAT}
                </span></span></a></div>
                </button>
                </td>   `

            }else if(seat.DISP==1){
                row2 +=`
                <td class="ocupado" >${seat.SEAT}</td> `

            }
            console.log(seat.SEAT)
        }
        if(seat.ROW_CINEMA==3){
            if(seat.DISP==0){
                row3 +=`
                <td class="vacio">
                <button class="boton" onclick="reservPage(${seat.ID_SEAT})">
                <div class="wrapper"><a class="link2"><span><span>
                ${seat.SEAT}
                </span></span></a></div>
                </button>
                </td>   `

            }else if(seat.DISP==1){
                row3 +=`
                <td class="ocupado" >${seat.SEAT}</td> `

            }
            console.log(seat.SEAT)
        }
        if(seat.ROW_CINEMA==4){
            if(seat.DISP==0){
                row4 +=`
                <td class="vacio">
                <button class="boton" onclick="reservPage(${seat.ID_SEAT})">
                <div class="wrapper"><a class="link2"><span><span>
                ${seat.SEAT}
                </span></span></a></div>
                </button>
                </td>`

            }else if(seat.DISP==1){
                row4 +=`
                <td class="ocupado" >${seat.SEAT}</td> `

            }
            console.log(seat.SEAT)
        }
        });
        // data.forEach(function (peliculas) { 

        // });
       document.getElementById('row-1').innerHTML = row1;
       document.getElementById('row-2').innerHTML = row2;
       document.getElementById('row-3').innerHTML = row3;
       document.getElementById('row-4').innerHTML = row4;

        })
}

function reservPage(id_seat){
localStorage.setItem('id_seat',id_seat)
//console.log(id_seat)
location.href="validate.html";

}

getInfo();