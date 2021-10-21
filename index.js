const express = require("express")
const path = require("path")

const bodyParser = require("body-parser")

const Mongo = require("mongoose")
//Monfo.connect...





const Routes = require('./routes/carta')

const app = express();


//Configurar el servidor y que sepa que es un json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use("/baraja",Routes);

//Que la aplicación escuche peticiones
Mongo.connect(`mongodb://localhost:27017/baraja`)
  .then(console.log("Conexion a BD exitosa")
  ,app.listen(8080,()=>{
    console.log("Aplicación web en línea localhost:8080")
  })).catch(error=>{console.log(error)})