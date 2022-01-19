import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Check from './../model/checkModel.js'

const router = express.Router()

router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const other = await Check.find({})

        if (other) res.json(...other)
        else throw new Error('Other not found')
    })
)

export default router
