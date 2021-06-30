// variables
const ui = new Interfaz();
const api = new API();
const btn = document.getElementById('btn');

// listeners 
btn.addEventListener('click', () =>{
    
    api.Peticion()
    .then(respuesta =>{
        const info = respuesta.respuesta["results"][0];
        ui.inicializar({
            nombre: info.name.first + ' ' + info.name.last,
            pais: info.location.country,
            sexo: info.gender,
            tel: info.phone,
            correo: info.email,
            imgUrl: info.picture.large,
            latitud: info.location.coordinates.latitude,
            longitud: info.location.coordinates.longitude
        });
    });
});

