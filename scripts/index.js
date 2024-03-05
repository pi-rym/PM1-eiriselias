class Activity{
    constructor(id, title, description, url){
        this.id = id;
        this.title = title;
        this.description = description;
        this.url = url;
    }
}

class Repository{
    constructor(){this.activities = []}
    //metodo que resiba datos de una actividad, cree una actividad
    createActivity(title, description, url){
        let id = this.activities.length+1;
        const newActivity = new Activity(id, title, description, url);
        this.activities.push(newActivity);
    }

    //metodo que permita retornar todas las actividades
    showActivities(){
        for(let i=0; i < this.activities.length; i++){
            console.log(`Actividad ${i+1}: `)
            console.log(`Titulo: ${this.activities[i].title} `);
            console.log(`Descricción: ${this.activities[i].description} `);
            console.log(`Url de la imagen: ${this.activities[i].url}`);
        }
    }

    //metodo que permita filtrar las actividades
    filterActivity(id){
        console.log(`la actividad del ID: ${id}`);
        console.log(`lleva como titulo: ${this.activities[id-1].title} `);
        console.log(`como descricción: ${this.activities[id-1].description} `);
        console.log(`y su url de la imagen es: ${this.activities[id-1].url}`);
    }
}

const repositorio = new Repository();

//se crean las actividades
repositorio.createActivity("saludar","es importante para las relaciones","http://saludar.com");
repositorio.createActivity("cantar","ayuda para tener una voz afinada","http://cantar.com");
repositorio.createActivity("ver","sin la vista estariamos en un mundo de oscuridad","http://ver.com");
repositorio.createActivity("bailar","es un buen ejercicio para el cuerpo","http://bailar.com");

repositorio.filterActivity(3); //se llama la actividad por un filtro

repositorio.showActivities(); // se muestran todas las actividades