const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('boton-reiniciar')
const  botonMascotaJugador = document.getElementById('boton-mascota')

const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const spanMascotaJugador = document.getElementById('mascota-jugador')
    
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes= document.getElementById('resultado')
const ataquesDelJugador= document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo= document.getElementById('ataques-del-enemigo')

const contenedorTarjetas =document.getElementById('contenedorTarjetas')

const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
let mokepones = []
let ataqueJugador = [] //variable global
let ataqueEnemigo = []
let opcionDeMokepones
let ataquesMokepon
let ataquesMokeponEnemigo
let inputHipodoge 
let inputCapipepo 
let inputRatigueya 
let mascotaJugador
let botonFuego 
let botonAgua 
let botonTierra 
let botones =[]
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let mascotaJugadorObjeto
let lienzo = mapa.getContext("2d")//contexto
let intervalo 
let mapaBackgroud =  new Image()
mapaBackgroud.src = './assets/mokemap.png'


let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa -20
}

alturaQueBuscamos = (anchoDelMapa * 600) / 800

mapa.width= anchoDelMapa
mapa.height = alturaQueBuscamos 

class Mokepon {
    constructor(nombre,foto,vida,fotoMapa){
        this.nombre = nombre
        this.foto= foto
        this.vida = vida
        this.ataques = []
        this.ancho=40
        this.alto=40
        this.x=aleatorio(0,mapa.width - this.ancho)
        this.y= aleatorio (0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x, //x
            this.y,//y
            this.ancho,//ancho
            this.alto,//alto
        )
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png',5, './assets/hipodoge.png')

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png')

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5, './assets/ratigueya.png')

let langostelvis = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5,  './assets/langostelvis.png')

let tucapalma = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',5,'./assets/tucapalma.png')

let pydos = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5,'./assets/pydos.png')


let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png',5, './assets/hipodoge.png')

let capipepoEnemigo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5,'./assets/capipepo.png')

let ratigueyaEnemigo = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5, './assets/ratigueya.png')

let langostelvisEnemigo = new Mokepon('Langostelvis','./assets/mokepons_mokepon_langostelvis_attack.png',5,  './assets/langostelvis.png')

let tucapalmaEnemigo = new Mokepon('Tucapalma','./assets/mokepons_mokepon_tucapalma_attack.png',5, './assets/tucapalma.png')

let pydosEnemigo = new Mokepon('Pydos','./assets/mokepons_mokepon_pydos_attack.png',5, './assets/pydos.png',400,190)



hipodoge.ataques.push(
    {nombre: '💧',id:'boton-agua'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-tierra'}
)

hipodogeEnemigo.ataques.push(
    {nombre: '💧',id:'boton-agua'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-tierra'}
)

capipepo.ataques.push(
    {nombre: '🌱',id:'boton-tierra'}, 
    {nombre: '🌱',id:'boton-tierra'}, 
    {nombre: '🌱',id:'boton-tierra'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-fuego'},
)

capipepoEnemigo.ataques.push(
    {nombre: '🌱',id:'boton-tierra'}, 
    {nombre: '🌱',id:'boton-tierra'}, 
    {nombre: '🌱',id:'boton-tierra'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🌱',id:'boton-tierra'} 
)

ratigueyaEnemigo.ataques.push(
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🌱',id:'boton-tierra'} 
)

langostelvisEnemigo.ataques.push(
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '💧',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🌱',id:'boton-tierra'} 
)

langostelvis.ataques.push(
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '💧',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🌱',id:'boton-tierra'} 
)

tucapalma.ataques.push(
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-agua'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '💧',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-tierra'} 
)

tucapalmaEnemigo.ataques.push(
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-agua'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '💧',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-tierra'} 
)

pydos.ataques.push(
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-tierra'} 
)

pydosEnemigo.ataques.push(
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '🌱',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🔥',id:'boton-tierra'} 
)

mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,tucapalma,pydos)//poner valores en el arreglo con el método push

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display='none'

    mokepones.forEach((mokepon) => {//por cada uno de los elementos del arreglo realiza lo siguiente
        //mokepon es una variable que representa cada instancia en cada iteracion
        //template literals
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
            <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
                <p>${mokepon.nombre}</p>
                <img src=${mokepon.foto} alt="${mokepon.nombre}">
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')
        inputLangostelvis = document.getElementById('Langostelvis')
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
    })

    //sectionReiniciar.style.display='none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click',reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){//peticion al servidor
    fetch("http://localhost:8080/unirse")
        .then(function (res){
            if (res.ok){
                res.text()
                    .then(function (respuesta){
                        console.log(respuesta)
                        jugadorId=respuesta
                    })
            }
        })

}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id//un input es un objeto, por eso se puede acceder a sus propiedades de esta manera
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id 
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id 
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id 
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id 
    } else {
        alert ('No seleccionaste ninguna mascota')
    }
    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`,{
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
}

function extraerAtaques(mascotaJugador){
    let ataques 

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque)=> {
        ataquesMokepon = `
        <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
    contenedorAtaques.innerHTML += ataquesMokepon
    })
    botonFuego =document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones= document.querySelectorAll('.BAtaque') //para usar un clase

}

function secuenciaAtaque(){
    botones.forEach((boton)=>{
        boton.addEventListener('click',(e)=>{
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled=true;
            }else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled=true;
            }else if (e.target.textContent === '🌱') {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112F58'
                boton.disabled=true;
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function  seleccionarMascotaEnemigo(enemigo){
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    //console.log('atques enemigo: ' ,ataquesMokeponEnemigo)
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 0){
        ataqueEnemigo.push ('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push ('AGUA')
    }else {
        ataqueEnemigo.push ('TIERRA')
    }
    console.log(ataqueEnemigo)
    
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index]=== ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE 🤔")
        } else if (ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index]  === 'TIERRA') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE 🎊")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else if (ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index]  === 'FUEGO') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE 🎊")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else if (ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index]  === 'AGUA') {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE 🎊")
            victoriasJugador++
            spanVidasJugador.innerHTML=victoriasJugador
        }else {
            indexAmbosOponentes(index,index)
            crearMensaje("PERDISTE 😔")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    
    revisarVictorias()
}

function revisarVictorias(){
    if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('Esto fue un empate!!!')
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal('Felicidades! GANASTE! 🥳')      
    }else {
        crearMensajeFinal('Lo siento PERDISTE 😔')
    }
}

function crearMensaje(resultado){//recibe como parámetro resultado
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo=document.createElement('p')
    
    sectionMensajes.innerHTML= resultado
    nuevoAtaqueDelJugador.innerHTML=indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML=indexAtaqueEnemigo

    ataquesDelJugador.appendChild( nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display='block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function pintarCanvas(){
    mascotaJugadorObjeto.x =  mascotaJugadorObjeto.x +  mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y =  mascotaJugadorObjeto.y +  mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height)//función que limpia el canvas indicandole que parte: desde el inicio del mapa hasta el final del mapa 
    lienzo.drawImage(
        mapaBackgroud,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()

    if(mascotaJugador.velocidadX !== 0 || mascotaJugador.velocidadY !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(langostelvisEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(tucapalmaEnemigo)
    }
}

function enviarPosicion(x,y){
    fetch (`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
}

function moverDerecha(){
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda(){
    mascotaJugadorObjeto.velocidadX = -5
    //pintarCanvas()
}
function moverAbajo(){
    mascotaJugadorObjeto.velocidadY = 5
    //pintarCanvas()
}
function moverArriba(){
    mascotaJugadorObjeto.velocidadY = -5
   // pintarCanvas()
}
function detenerMovimiento(){
    mascotaJugadorObjeto.velocidadX=0
    mascotaJugadorObjeto.velocidadY=0
}

function sePresionoUnaTecla(event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas,50) //vuelve a ejecutar la funcion cada tiempo indicado (funcion,intervalo)
    
    window.addEventListener('keydown',sePresionoUnaTecla)

    window.addEventListener('keyup',detenerMovimiento)
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
        
    }
}
function revisarColision(enemigo){
    const arribaEnemigo= enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota= mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x

    if ( //no hay colision si no se cumplen ninguna de estas condicione
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return;
    }
    detenerMovimiento()
    clearInterval(intervalo)
    console.log('colisionnnnnnnn')
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}
    //alert("COLISION!!! "+ enemigo.nombre)
window.addEventListener('load',iniciarJuego)  