import express from 'express'
import expressAsyncHandler from 'express-async-handler'

const router = express.Router()
const token = '2049880477:AAFQUCdSl8wzxE7QIwP7qU5_lFdmzlAPjXA'
const chat_id = -1001300088307

router.post(
    '/',
    expressAsyncHandler((req, res) => {
        if (
            Object.values(req.body).every(field => field.length > 0) &&
            /\b\d{9}\b/.test(req.body.phone)
        )
            res.status(200).json({ code: 0, data: { ...req.body, token, chat_id } })
        else res.status(400).json({ code: 10001 })
    })
)

export default router
