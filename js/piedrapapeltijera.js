let movimiento = ["Piedra","Papel","Tijera"]


    let jugador = opcion()
    let computadora = Math.floor(Math.random()*movimiento.length)
        console.log(computadora);
        switch(jugador)
        {
            case (jugador === "Tijera"):
            if(jugador === "Tijera" && computadora===2)
            {
                alert("El jugador eligió Piedra")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El jugador Gana");
            }
            else if(computadora===1)
            {
                alert("El jugador eligió Piedra")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("La Computadora Gana");
            }
            else{
                alert("El jugador eligió Piedra")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El Jugador y La Computadora empataron");
            }
            break
            case 2:
            if(jugador===2 && computadora===0)
            {
                alert("El jugador eligió Papel")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El jugador Gana");
            }
            else if(computadora===2)
            {
                alert("El jugador eligió Papel")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("La Computadora Gana");
            }
            else{
                alert("El jugador eligió Papel")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El Jugador y La Computadora empataron");
            }
            break
            case 3:
            if(jugador===3 && computadora===1)
            {
                alert("El jugador eligió Tijera")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El jugador Gana");
            }
            else if(computadora===0)
            {
                alert("El jugador eligió Tijera")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("La Computadora Gana");
            }
            else{
                alert("El jugador eligió Tijera")
                alert(`La computadora eligió ${movimiento[computadora]}`)
                alert("El Jugador y La Computadora empataron");
            }
            break
    }


function opcion(){
    let btn = document.querySelectorAll(".decision");
    btn.forEach(function(i){
        i.addEventListener("click",function(e){
            console.log(this.innerHTML);
        })
    })
    //console.log(opc);
}