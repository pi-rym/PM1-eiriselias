class Activity{
    constructor(id, title, description, url){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}

class Repository{
    constructor(){
        this.activities = [];
        this.id = 1;
    }
    //metodo que resiba datos de una actividad, cree una actividad
    createActivity(title, description, url){
        const newActivity = new Activity(this.id, title, description, url);    
        this.id++;    
        this.activities.push(newActivity);
        alert("Se agrego la actividad "+title)
    }
    maquetado(articulo){
        return `<article data-id="${articulo.id}" class="articulo">
        <img
          src="${articulo.url}"
          onerror="this.src='./assets/img/sinImagen.png';"
        />
        <div>
            <h3>${articulo.title}</h3>
            <div class="texto">
                <p>${articulo.description}</p>
            </div>
        </div>
        <button class="btnEliminar">Eliminar</button>
      </article>`
    }
    //metodo que permita retornar todas las actividades
    getAllActivities(){
        const contenedor = document.getElementById("tarjetas");
        contenedor.innerHTML = "";

        this.activities.forEach(arti => {
            const articuloHtml = this.maquetado(arti);
            contenedor.innerHTML += articuloHtml;
        });
    }
    
    //metodo que permita filtrar las actividades
    deleteActivity(id){
        if(confirm(`Desea eliminar la actividad`)){        
            this.activities = this.activities.filter(actividad => actividad.id != id);
            this.getAllActivities();
        }
    }


}

const repositorio = new Repository();


//recargo el dom
document.addEventListener("DOMContentLoaded", function(){

    //escucho los click y intifico cual boton eliminar es presionado para eliminar su articulo
    document.addEventListener("click", function (e){    
        if(e.target.classList.contains("btnEliminar")){
            const idArti = e.target.closest(".articulo").dataset.id;
            repositorio.deleteActivity(idArti);
        }
    });

    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const url = document.querySelector("#url").value;
        repositorio.createActivity(title, description, url);
        repositorio.getAllActivities();

        //despues de agregar la tarjeta me hace scroll a la seccion de ellas
        const seccionTarjetas = document.getElementById("seccionTarjetas");
        seccionTarjetas.scrollIntoView({ behavior: 'smooth' });

        document.getElementById("formulario").reset();
    })

    repositorio.getAllActivities();
});
