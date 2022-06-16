import express from 'express';
import {votersSignup} from '../controllers/votersAuthentication.js';


const router = express.Router()

router.get('/', (req, res) => {
        res.send("voters page")
})

router.post('/signup', votersSignup)

export default router
