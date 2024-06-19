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

class Mokepon {
    constructor(nombre,foto,vida){
        this.nombre = nombre
        this.foto= foto
        this.vida = vida
        this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png',5)

let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)


hipodoge.ataques.push(
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

ratigueya.ataques.push(
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '🔥',id:'boton-fuego'},
    {nombre: '💧',id:'boton-agua'},
    {nombre: '🌱',id:'boton-tierra'} 
)

mokepones.push(hipodoge,capipepo,ratigueya)//poner valores en el arreglo con el método push

function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'

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
    })

    sectionReiniciar.style.display='none'
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    
    botonReiniciar.addEventListener('click',reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id//un input es un objeto, por eso se puede acceder a sus propiedades de esta manera
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id 
    } else {
        alert ('No seleccionaste ninguna mascota')
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
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

function  seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio(0,mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
}



function ataqueAleatorioEnemigo(){
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


window.addEventListener('load',iniciarJuego)  