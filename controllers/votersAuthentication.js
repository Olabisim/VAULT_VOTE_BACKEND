import jwt from 'jsonwebtoken'

import Voters from '../models/Voters.js'

const votersSignup = async (req, res, next) => {


        try {
                // pick voter data from body

                const voter = await Voters.create({

                        name: req.body.name,
                        matricNumber: req.body.matricNumber,
                        email: req.body.email,
                        password: req.body.password

                })

                // sign token

                const token = jwt.sign({id :  voter.id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES_IN,
                } )

                // send  token in cookie

                res.cookie('jwt', token, {
                        expiresIn: new Date(
                                Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 60 * 1000
                        )
                })

                // hide password from response
                voter.password = undefined;

                res.status(201).json({
                        status: "success",
                        message: "voter successfuly registered",
                        data: {
                                voter
                        }
                })

        }
        catch (err) {
                err.statusCode = 400;
                err.status = "failed";
                next(err);
        }

}

export { votersSignup };