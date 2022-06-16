import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


import express from 'express'
import cors from 'cors'

// ROUTES
import voterRoutes from './routes/voters.js'
import candidateRoutes from './routes/candidates.js'
import adminRoutes from './routes/admin.js'

const app = express();

app.use(express.json())
app.use(express.static(`${__dirname}/public`))



// CORS PROBLEM ALLOWING FRONTEND TO PROCESS HTTP METHODS

app.use(cors());

app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader("Access-Control-Allow-Origin", "*");

        // Request methods you wish to allow
        res.setHeader(
                "Access-Control-Allow-Methods",
                "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );

        // Request headers you wish to allow
        res.setHeader(
                "Access-Control-Allow-Headers",
                "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
        );

        next();
});

// CORS PROBLEM END



// ************************************************
// ROUTES



app.use("/voter", voterRoutes)
app.use("/candidate", candidateRoutes)
app.use("/admin", adminRoutes)



// unhandled routes 
app.all("*", (req, res) => {
        res.status(404).json({
                status: "fail",
                message: `can't find ${req.originalUrl} on this server`
        })
})


// global error handler

app.use((err, req, res) => {
        err.statusCode = err.statusCode || 500;
        err.status = err.status || "erro";

        res.status(err.statusCode).json({
                status: err.status,
                message: err.message
        })
})


export default app;


