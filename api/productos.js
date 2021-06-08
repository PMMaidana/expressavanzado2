class Productos {
    constructor() {
        this.productos = []
        this.lastId = 0
        // incializar variables
    }
    

    guardar({title, price, thumbnail}) {
        this.productos.push({title, price, thumbnail,  id: this.generateID()})
    };

    listar() {
        return this.productos
    }

    reemplazar({title, price, thumbnail}, someId){
        let posicionId = someId - 1
        this.productos.splice(posicionId, 0, {title, price, thumbnail,  id: someId})
    }
    
    generateID(){
        return ++this.lastId
    }

    remover(removeId){
        let removeThisId = removeId - 1
        this.productos.splice(removeThisId, 1, );
    }
}

// exporto una instancia de la clase
module.exports = new Productos();