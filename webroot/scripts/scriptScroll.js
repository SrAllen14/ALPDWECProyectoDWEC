//https://randomuser.me/documentation
const urlUsuarios = 'https://randomuser.me/api/?results=24';
const listaUsuarios = document.querySelector('#listaUsuarios');



// fetch(url10Usuarios)
// //.then(response =>console.log(response));
// .then(response => response.json())
// //  .then(datos=> console.log(datos));
// .then((data) => {
//     data.results.forEach(usuario => {
//         const li = document.createElement("li");
//         li.textContent=usuario.name.first + " "+usuario.name.last;
//         listaUsuarios.append(li);        
//     });
// })
// .catch(error => console.error(error));
//Altura del viewport
//https://developer.mozilla.org/es/docs/Web/API/Window/innerHeight
//alto de un elemento
//https://developer.mozilla.org/es/docs/Web/API/HTMLElement/offsetHeight
// para que se lance de nuevo el fetch antes de que llegue al final de la pagina
// Cuando la "distancia"  que se ha bajado con el scroll el alto de la vista sea superior o igual al alto de la pagina menos 100px(para dar un poco de margen) 
//window.innerHeight + window.scrollY >= document.body.offsetHeight - 100

        fetch(urlUsuarios)
        //.then(response =>console.log(response));
        .then(response => response.json())
        //  .then(datos=> console.log(datos));
        .then((data) => {
            data.results.forEach(usuario => {
            //div usuario. Contenedor de los demás divs
            const divUsuario = document.createElement("div");
            divUsuario.classList.add("usuario");
            //div para el nombre
            const divNombre = document.createElement("div");
            divNombre.textContent="Nombre: "+usuario.name.first + " "+usuario.name.last;
            divNombre.classList.add("nombre");
            //div para la foto
            const divFoto = document.createElement("div");
            divFoto.classList.add("fotoUsuario");
            const img = document.createElement("img");
            img.src=usuario.picture.large;
            divFoto.append(img);
            //div para el pais
            const divPais = document.createElement("div");
            divPais.textContent="Pais: "+usuario.location.country;
            //div para el email
            const divEmail = document.createElement("div");
            divEmail.textContent="Email: "+usuario.email;
            //se crean los divs del usuario
            divUsuario.append(divNombre, divFoto, divPais, divEmail);
            //se crea el contenedor de usuarios
            listaUsuarios.append(divUsuario);


    });
    console.log(listaUsuarios);
})
.catch(error => console.error(error));
    

window.addEventListener('scrollend',()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 100){
        fetch(urlUsuarios)
        //.then(response =>console.log(response));
        .then(response => response.json())
        //  .then(datos=> console.log(datos));
        .then((data) => {
            data.results.forEach(usuario => {
            //div usuario. Contenedor de los demás divs
            const divUsuario = document.createElement("div");
            divUsuario.classList.add("usuario");
            //div para el nombre
            const divNombre = document.createElement("div");
            divNombre.textContent="Nombre: "+usuario.name.first + " "+usuario.name.last;
            divNombre.classList.add("nombre");
            //div para la foto
            const divFoto = document.createElement("div");
            divFoto.classList.add("fotoUsuario");
            const img = document.createElement("img");
            img.src=usuario.picture.large;
            divFoto.append(img);
            //div para el pais
            const divPais = document.createElement("div");
            divPais.textContent="Pais: "+usuario.location.country;
            //div para el email
            const divEmail = document.createElement("div");
            divEmail.textContent="Email: "+usuario.email;
            //se crean los divs del usuario
            divUsuario.append(divNombre, divFoto, divPais, divEmail);
            //se crea el contenedor de usuarios
            listaUsuarios.append(divUsuario);
    });
    console.log(listaUsuarios);
})
.catch(error => console.error(error));
    }

})

