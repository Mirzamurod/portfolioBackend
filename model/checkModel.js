import mongoose from 'mongoose'

const checkSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const Check = mongoose.model('Check', checkSchema)

export default Check
