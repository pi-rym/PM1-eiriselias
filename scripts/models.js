class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}
class Repository{
    constructor(){
        this.activities = [];
        this.id = 1;
    }
    //metodo que resiba datos de una actividad, cree una actividad
    createActivity(title, description, imgUrl){
        const newActivity = new Activity(this.id, title, description, imgUrl);    
        this.id++;    
        this.activities.push(newActivity);
        alert("Se agrego la actividad "+title)
    }
    maquetado(articulo){
        return `<article data-id="${articulo.id}" class="articulo">
        <img
          src="${articulo.imgUrl}"
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

module.exports = {Activity, Repository};