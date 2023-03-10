//Imports
const mongoose = require('mongoose')
const Map = require('../models/Map')
const bcrypt = require('bcryptjs')

//Enviroment Variables
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const cluster = process.env.CLUSTER
const maps_collection = process.env.MAPSCOLLECTION
const masterToken = process.env.TOKEN

exports.handler = async function(event, context){
    //Connection with MongoDB Atlas
    let connection = await mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@${cluster}.se0mehr.mongodb.net/${maps_collection}?retryWrites=true&w=majority`)

    //Check if connetion succeeded
    if(connection){
        console.log('Connection successful!')
    }else{
        return{
            statusCode: 500,
            body: JSON.stringify({
                resposta: "Connection failed."
            })
        }
    }

    const eventBody = await JSON.parse(event.body)
    const { curso, turno, dia, turma, professor, sala, modulo, inicio, fim, token } = eventBody

    //Check admin
    let checkAdmin = await bcrypt.compare(masterToken, token)
    if(!checkAdmin){
        return{
            statusCode: 401,
            body: JSON.stringify({
                msg: "Unauthorized"
            })
        }
    }

    //Finding document
    let table = await Map.findOne({CURSO: curso})

    //Updating
    table[turno][dia][turma]["PROFESSOR"] = professor
    table[turno][dia][turma]["SALA"] = sala
    table[turno][dia][turma]["MODULO"] = modulo
    table[turno][dia][turma]["INICIO"] = inicio
    table[turno][dia][turma]["FIM"] = fim
    let confirmUpdate = await Map.updateOne({CURSO: curso}, table)

    //Response
    if(confirmUpdate.matchedCount != 0 && confirmUpdate.updateOne != 0){
        return{
            statusCode: 200,
            body: JSON.stringify({
                resposta: "Update successful."
            })
        }
    }else{
        return{
            statusCode: 412,
            body: JSON.stringify({
                resposta: "Update failed."
            })
        }
    }
}