class Interfaz {
    constructor() {
        this.tileProveedor = "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";
        this.mapa;
        this.personaDom = document.querySelector('.persona-d');
        this.inicializar();
    }

    inicializar(obj){
        const objInic = obj ? obj : {
            nombre: 'El desconocido',
            pais: '????',
            sexo: 'Masculino',
            tel: '????',
            correo: '????',
            imgUrl: 'img/default.jpg',
            latitud: -10000,
            longitud: -10000
        };

        this.mostrarPerfil(objInic);
        this.mostrarUbicacion(objInic);
    }
    
    mostrarPerfil(persona) {
        this.borrarData();

        document.querySelector('#perfilImg').src= persona.imgUrl;

        const fragmentoHtml = document.createDocumentFragment();

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(persona.nombre));

        const ul = document.createElement('ul');
        ul.innerHTML = `
        <li>Pais de origen: ${persona.pais}</li> 
        <li>Genero: ${persona.sexo[0]}</li> 
        <li>Numero Telefonico: ${persona.tel}</li> 
        <li>Correo electronico: ${persona.correo}</li>`;

        fragmentoHtml.appendChild(h1);
        fragmentoHtml.appendChild(ul);

        this.personaDom.appendChild(fragmentoHtml);
    }

    mostrarUbicacion(persona) {

        this.mapa = L.map('myMap').setView([persona.latitud, persona.longitud], 5);

        L.tileLayer(this.tileProveedor, {
            maxZoom: 18,
        }).addTo(this.mapa);

        let marker = L.marker([persona.latitud, persona.longitud]).addTo(this.mapa);
        marker.bindPopup(`<img src="${persona.imgUrl}" width='60' height='60'> <h4>${persona.nombre}</h4>`).openPopup();
    }

    borrarData() {
        while (this.personaDom.firstChild) {
            this.personaDom.removeChild(this.personaDom.firstChild);
        }
        if (this.mapa) {
            this.mapa.off();
            this.mapa.remove();
        }
    }

}