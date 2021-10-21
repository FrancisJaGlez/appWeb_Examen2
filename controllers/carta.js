const Carta = require("../models/carta")
const mongo = require("mongoose")

exports.postAgregarCarta = async (req, res) => {
  console.log(req.body)
  const carta = new Carta(req.body)

      Carta.findOne(carta).then(resultado=>{
        console.log(resultado)
      })


      /*try{
        carta.save()
        console.log(carta)
        console.log("Carta Agregada")
      }catch(error){
        console.log(error)
      }*/
    
   
}

exports.postQuitarCarta = async (req, res) => {
  const carta = new Carta(req.body)
  try{
    await Carta.findAndRemove(carta)
    console.log("Carta eliminada")
  }catch(error){
    console.log(error)
  }
}

exports.getMostrarBaraja = (req,res) => {
  Carta.find().then(resultado => {
    console.log(resultado)
  }).catch(err=>console.log(err))

  console.log(baraja)
}