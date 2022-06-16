
import mongoose from 'mongoose'
const {Schema, model } = mongoose

let votersSchema = new Schema({

        name: {
                type: String,
                required: true
        },
        matricNumber: {
                type: String,
                required: true
        },
        email: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        }

})

const Voters = model( "Voters", votersSchema)

export default Voters;
