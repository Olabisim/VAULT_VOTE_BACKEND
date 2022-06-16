import dotenv from 'dotenv'
import app from './app.js'


dotenv.config({
        path: './.env'
})


const port = 7000

app.get('/', (req, res) => {
        console.log("home page")
})

app.listen(port, (req, res) => {
        console.log('server started')
})
