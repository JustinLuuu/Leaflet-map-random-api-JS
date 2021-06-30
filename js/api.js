class API{
    constructor(){
        this.url = 'https://randomuser.me/api/?results=1';
    }

    async Peticion(){
        const pedir = await fetch(this.url);
        const respuesta = await pedir.json();
        return {respuesta};
    }
}