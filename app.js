import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


import express from 'express'

const app = express();

const port = 7000

app.get('/', (req, res) => {
        console.log("home page")
})

app.listen(port, (req, res) => {
        console.log('server started')
})
