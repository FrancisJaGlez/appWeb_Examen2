const Carta = require("../models/carta")
const mongo = require("mongoose")

exports.postAgregarCarta = async (req, res) => {
  console.log(req.body)
  const carta = new Carta(req.body)

      await Carta.find(req.body).then(resultado=>{
        console.log(resultado)
        if(resultado.length == 0 || resultado == null){
          if (checarBarajaInglesa(req.body)){
            //Es carta inglesa

            const carta = new Carta(req.body)

            try{
              carta.save()
              console.log(carta)
              console.log("Carta Agregada")
              res.json({database: "Carta agregada"})
            }catch(error){
              console.log(error)
            }


          } else {
            //no es carta inglesa
            console.log("Esta no es una carta inglesa (la numeracion si corresponde con mayusculas, los demas datos en minusculas) ")
            res.json({database: "Esta no es una carta inglesa (la numeracion si corresponde con mayusculas, los demas datos en minusculas) ", 
            cartaInglesa : "Numeracion: A ,2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K. Color: rojo, negro. Palo: picas, diamantes, corazones, treboles."})
          }
        } else {
          console.log("Ya existe esta tarjeta")
          res.json({database: "Ya existe esta tarjeta"})
        }
      }).catch(error => {
        console.log(error)
      })   
}

exports.postQuitarCarta = async (req, res) => {
  console.log(req.body)
  try{
    await Carta.find(req.body).then(resultado => {
      if(resultado.length != 0 && resultado == null){
        Carta.findOneAndDelete(req.body)
        console.log("Carta eliminada")
        res.json({database: "Carta eliminada"})
      } else {
        console.log("Carta no eliminada por: Carta no encontrada")
        res.json({database: "Carta no eliminada por: Carta no encontrada"})
      }
    })
  }catch(error){
    console.log(error)
  }
}

exports.getMostrarBaraja = (req,res) => {
  Carta.find().then(resultado => {
    console.log("Mostrando Baraja: \n"+ resultado)
    res.json(resultado)
  }).catch(err=>console.log(err))
}

function checarBarajaInglesa(carta){

  const cartaDesconocida = new Carta(carta)

  if(cartaDesconocida.numeracion == "As" || cartaDesconocida.numeracion == "A" || 
  cartaDesconocida.numeracion == "2" || cartaDesconocida.numeracion == "3" || 
  cartaDesconocida.numeracion == "4" || cartaDesconocida.numeracion == "5" || 
  cartaDesconocida.numeracion == "6" || cartaDesconocida.numeracion == "6" || 
  cartaDesconocida.numeracion == "8" || cartaDesconocida.numeracion == "9" || 
  cartaDesconocida.numeracion == "10" || cartaDesconocida.numeracion == "J" || 
  cartaDesconocida.numeracion == "Q" ||cartaDesconocida.numeracion == "K"){

    if (cartaDesconocida.color == "rojo" || cartaDesconocida.color == "negro"){

        if(cartaDesconocida.palo == "treboles" || cartaDesconocida.palo == "diamantes" || 
        cartaDesconocida.palo == "corazones" || cartaDesconocida.palo == "picas"){

          return true;
          
        }

    }
  }

  return false;

}