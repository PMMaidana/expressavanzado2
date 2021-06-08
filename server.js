const express = require('express');
const { listarId, remover } = require('./api/productos');
const productos = require('./api/productos');
/* const lista_prod = new Productos; */
const router = express.Router();
// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



router.get('/', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'Express Avanzado Martin Maidana' });
});

router.get('/productos/listar', (req, res) => {  
    res.send(productos.listar());}    
    )

router.get('/productos/listar/:id', (req, res) => {
    consultaID = req.params.id;
    totalProd = productos.listar().filter(x => x.id == consultaID)
    res.send(totalProd);
    });

router.post('/productos/guardar', (req, res) => {
        let contenido = req.body;
        productos.guardar(contenido);
        return res.json(contenido);
})

router.put('/productos/actualizar/:id', (req, res) => {  
    consultaID = req.params.id;
    productos.remover(consultaID);
    let contenido = req.body;
    productos.reemplazar(contenido, consultaID)
    return res.json(contenido);
});

router.delete('/productos/borrar/:id', (req, res) => { //delete
    consultaID = req.params.id;
    prodRemovido = productos.listar().filter(x => x.id == consultaID)
    productos.remover(consultaID);
    res.send(prodRemovido)
});

app.use('/api', router);

// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
