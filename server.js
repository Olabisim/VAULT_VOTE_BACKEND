import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'


dotenv.config({
        path: './.env'
})

const port = 7000

const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI)
        .then(connection => console.log("mongodb connected"))
        .catch(err => console.log(`error:: ${err}`))

app.get('/', (req, res) => {
        console.log("home page")
})

app.listen(port, (req, res) => {
        console.log('server started')
})
