
import {Schema, model } from 'mongoose'

let adminSchema = new Schema({

        name: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }

})

const Admin = model( "Admin", adminSchema)

export default Admin;
