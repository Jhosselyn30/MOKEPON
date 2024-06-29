const express = require("express") //libreria express importada 
const cors = require("cors")

const app = express()//apliacion con express 

app.use(cors())
app.use(express.json())//habilitar para poder recibir peticiones post

const jugadores= []

class Jugador {
    constructor(id){
        this.id = id
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }

    actualizarPosicion(x,y){
        this.x = x
        this.y = y
    }
}

class Mokepon {
    constructor(nombre){
        this.nombre=nombre
    }
}

app.get("/unirse", (req,res) =>{ //peticion enviar
    const id = `${Math.random()}`

    const jugador = new Jugador(id)//crear  jugador

    jugadores.push(jugador) // agrgear jugador a la lista 

    res.setHeader("Access-Control-Allow-Origin","*")

    res.send(id)//respuesta
})

app.post("/mokepon/:jugadorId",(req,res)=>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)

    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if (jugadorIndex >=0){
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion",(req,res)=>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador)=> jugadorId === jugador.id)

    if (jugadorIndex >=0){
        jugadores[jugadorIndex].actualizarPosicion(x,y)
    }

    res.end()
})

app.listen(8080, ()=> {
    console.log("Servidor funcionando")//escuche en el puerto las peticiones 
})

//ctrl c : apagar servidor

