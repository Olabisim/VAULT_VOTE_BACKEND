
import {Schema, model } from 'mongoose'

let candidateSchema = new Schema({

        name: {
                type: String,
                required: true
        },
        matricNumber: {
                type: String,
                required: true
        },
        post: {
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

const Candidate = model( "Candidate", candidateSchema)

export default Candidate;
