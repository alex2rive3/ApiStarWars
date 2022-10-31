for (let i = 1; i <= 6; i++) {
    let urlPersona = `https://swapi.dev/api/people/${i}/`;
    fetch(urlPersona).then(response => response.json())
    .then(json =>{
    const contenedorElement = document.getElementById("contenedor");
        //div que contendra los datos del personaje de starWars
        const personaje = document.createElement("div");
        personaje.className = "card";

        //nombre del personaje
        const nombre = document.createElement("span");
        nombre.innerHTML = `${json.name}`;

        
        const linea = document.createElement("hr");
        //Estatura del personaje
        const estatura = document.createElement("span");
        estatura.innerHTML = `Height: ${json.height/100} m`;
        
        //Estatura del personaje
        const genero = document.createElement("span");
        genero.innerHTML = `Gender: ${json.gender}`;

        //Color de Skin del personaje
        const colorSkin = document.createElement("span");
        colorSkin.innerHTML = `Skin Color: ${json.skin_color}`;
        
        //Color de Skin del personaje
        const pelicula = document.createElement("span");
        fetch(json.films[0])
        .then(dato => dato.json())
        .then(res => pelicula.innerHTML = `Other Film: ${res.title}`);
        

        //agregamos los elementos al div de producto
        personaje.appendChild(nombre);
        personaje.appendChild(linea);
        personaje.appendChild(estatura);
        personaje.appendChild(colorSkin);
        personaje.appendChild(genero);
        personaje.appendChild(pelicula);

        //agregamos el personaje al contenedor 
        contenedorElement.appendChild(personaje);

    });
}