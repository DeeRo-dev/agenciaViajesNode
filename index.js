import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();
//conectar la base de datos

db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(error => console.log(error));

const port = process.env.PORT || 4000;
//Aagregar body parse para leer los datos del form 
app.use(express.urlencoded({ extended: true}));

//habilitar pug
app.set('view engine', 'pug')
//Obtener el anio actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"
    next();
})
//agreggar route
app.use('/', router);


//Definir la carpeta publica
app.use(express.static('public'))
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});