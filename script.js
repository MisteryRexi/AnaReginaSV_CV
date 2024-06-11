let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("gamemaker2");
        habilidades[3].classList.add("pyton");
        habilidades[4].classList.add("C");
        habilidades[5].classList.add("mySQLGithub");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajoenequipo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("autodidacto");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//FILTROS
let btnFiltros = document.querySelectorAll(".filtro");
let productos = document.querySelectorAll(".item-producto");

btnFiltros.forEach(function(i){
  i.addEventListener('click', function(e){
    //quito la clase selected
    for(i=0;i<=3;i++){
      btnFiltros[i].classList.remove("selected");
    }

    //agrego la clase selected
    e.target.classList.add("selected");

    //tomo el id que selecciono
    var clase = e.target.id;

    if(clase=="todos"){
      productos.forEach(function(prod){
        prod.style.display = "block";
      })
    }else{
      productos.forEach(function(prod){
        if(prod.classList.contains(clase)){
          prod.style.display = "block";
        }else{
          prod.style.display = "none";
        }
      })
    }
  });
});

