class Destino {
    constructor(img, lugar, descripcion, precio, id){
        this.img= img;
        this.lugar= lugar;
        this.descripcion=descripcion;
        this.precio= precio;
        this.id= id;
    }
}
class Actividades {
    constructor(img, experiencia, descripcion, precio, id){
        this.img= img;
        this.experiencia= experiencia;
        this.descripcion=descripcion;
        this.precio= precio;
        this.id= id;
    }
}
const surf = ( new Actividades("./img/Surfplaya.jpg", "Surf", "Clases o full days de surf", "a consultar", "1"));
const caminata = ( new Actividades("./img/caminata.jpg", "Trekking", "Expediciones por dias o varios dias", "a consultar", "2"));
const esqui = ( new Actividades("./img/esqui.jpg", "Esqui", "Clases para principiantes o avanzados", "a consultar", "3"));
const paddle = ( new Actividades("./img/paddle.jpg", "Paddle", "Alquiler de equipos y asistencia durante la actividad", "a consultar", "4"));
const paracaidas = ( new Actividades("./img/paracaida.jpg", "Paracaidas", "Santos principiantes o expertos", "a consultar", "5"));
const rapidos = ( new Actividades("./img/rapidos.jpg", "Rapidos", "Disfruta esta experiencia a full adrenalina", "a consultar", "6"));
const experiencias = [surf, caminata, esqui, paddle, paracaidas, rapidos];

const iguazu =( new Destino ("./img/iguazu.jpg", "Cataratas de Iguazu","Visita una de las siete Maravillas naturales del mundo", "a consultar", "1" ));
const mendoza = ( new Destino ("./img/mendoza.jpg", "Mendoza", "Aventurate a conocer la cuna de uno de los mejores vinos del mundo", "a consultar", "2"));
const playa = ( new Destino ("/img/playa.jpg", "Rio de Janeiro", "Conocé un paraiso viajando a rio", "a consultar", "3" ));
const bariloche = (new Destino("./img/bariloche.jpg", "Bariloche","Viaja a uno de los lugares mas mágicos de Argentina", "a consultar", "4" ));
const calafate = ( new Destino ("./img/calafate.jpg", "Calafate", "Un paisaje como ningún otro te espera en el calafate", "a consultar", "5"));
const jujuy = ( new Destino ("./img/jujuy.jpg", "Jujuy","Casi como un viaje a otro planeta pero al norte de Argentina", "a consultar", "6" ));
const lugares = [iguazu, mendoza, playa, bariloche, calafate, jujuy];

    


function nuevaCards(Destino) {
    const rowcard = document.getElementById("rowcard");
    let col = document.createElement("div");
    col.innerHTML = ` 
    <div class="card">
    <img src= ${Destino.img} class="card-img-top border" alt="...">
    <h5 class="card-title">${Destino.lugar}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${Destino.descripcion} </p>
      <button id="${Destino.id}" class="btn btn-1 boton">Ver mas </button>
    </div>
    </div>`;
    rowcard.append(col)
    rowcard.classList.add("row");
    col.classList.add("col", "col-sm-8", "col-md-6", "col-lg-4");

}

function nuevaCardsActividad(Actividades) {
    const rowcardactividades = document.getElementById("rowcardactividades");
    let columna = document.createElement("div");
    columna.innerHTML = ` 
    <div class="card">
    <img src= ${Actividades.img} class="card-img-top border" alt="...">
    <h5 class="card-title">${Actividades.experiencia}</h5>
    <div class="card-body text-center" style="width: 18rem;">
      <p> ${Actividades.descripcion} </p>
      <button id="${Actividades.id}" class="btn btn-1 boton">Ver mas </button>
    </div>
    </div>`;
    rowcardactividades.append(columna)
    rowcardactividades.classList.add("row");
    columna.classList.add("col", "col-sm-8", "col-md-6", "col-lg-4");
}
$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

   

 function iniciardest () {
         lugares.forEach((Destino) => {
        nuevaCards(Destino);
        })
}

const renderdestino =  document.querySelector(".renderdestino")
renderdestino.addEventListener("click",iniciardest())

function iniciaract(){
    experiencias.forEach((Actividades) => {
        nuevaCardsActividad(Actividades);
    });
}

iniciaract() 
 

 



