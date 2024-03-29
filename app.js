import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import projectRoutes from './routes/projectRoutes.js'
import otherRoutes from './routes/otherRoutes.js'
import checkRoutes from './routes/checkRoutes.js'
import contactRoutes from './routes/contectRoutes.js'
import cors from 'cors'

const app = express()
dotenv.config()
connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/projects', projectRoutes)
app.use('/others', otherRoutes)
app.use('/check', checkRoutes)
app.use('/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port -- ${process.env.PORT}`.yellow.bold)
})
