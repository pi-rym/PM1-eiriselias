const repositorio = new Repository();

function handler(e){
    e.preventDefault();
        const title = document.querySelector("#title").value;
        const description = document.querySelector("#description").value;
        const imgUrl = document.querySelector("#url").value;

        if(title=="" || description=="" || imgUrl==""){
            return alert("debe llenar los todos campos");
        }

        repositorio.createActivity(title, description, imgUrl);
        repositorio.getAllActivities();

        //despues de agregar la tarjeta me hace scroll a la seccion de ellas
        const seccionTarjetas = document.getElementById("seccionTarjetas");
        seccionTarjetas.scrollIntoView({ behavior: 'smooth' });

        document.getElementById("formulario").reset();
}

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
    formulario.addEventListener("submit", handler)

    repositorio.getAllActivities();
});
