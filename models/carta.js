const mongo = require("mongoose")

const BarajaSchema = mongo.Schema({
    numeracion: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }, 
    palo: {
      type: String,
      required: true
    }
}, {collection: "baraja"})

module.exports = mongo.model("barajas", BarajaSchema)