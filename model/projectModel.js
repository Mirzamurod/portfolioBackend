import mongoose from 'mongoose'

const projectSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
            default: '/images/comingsoon1.png',
        },
        made: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
        like: {
            type: Number,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Project = mongoose.model('Project', projectSchema)

export default Project
