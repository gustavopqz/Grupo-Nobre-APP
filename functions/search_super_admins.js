require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')

//Enviroment Variables
const db_user = process.env.DB_TI_USER
const db_pass = process.env.DB_TI_PASSWORD
const cluster = process.env.DB_TI_CLUSTER
const db_name = process.env.DB_TI_NAME

exports.handler = async function (event, context){
    //Connection with MongoDB Atlas
    let connection = await mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@${cluster}.qk8butq.mongodb.net/${db_name}?retryWrites=true&w=majority`)

    //Check if connetion succeeded
    if(connection){
        console.log('Connection successful!')
    }else{
        return{
            statusCode: 500,
            body: JSON.stringify({
                msg: "Connection failed."
            })
        }
    }

    //GET ALL USERS
    let superAdmins = await Admin.find({permissions: "super-admin"})

    //Showing users name
    let users = []
    for (let index in superAdmins){
        let login = superAdmins[index]['login']
        users.push(login)
    }

    //Response
    if(superAdmins){
        return{
            statusCode: 200,
            body: JSON.stringify({
                users: users.sort()
            })
        }
    }else{
        return{
            statusCode: 200,
            body: JSON.stringify({
                msg: "Nenhum usuário encontrado"
            })
        }
    }
}