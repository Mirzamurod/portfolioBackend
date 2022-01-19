import mongoose from 'mongoose'

const otherSchema = mongoose.Schema(
    {
        aboutMe: {
            type: String,
            required: true,
        },
        mobileAboutMe: {
            type: String,
            required: true,
        },
        contactAboutMe: {
            type: String,
            required: true,
        },
        facebook: {
            type: String,
            required: true,
        },
        instagram: {
            type: String,
            required: true,
        },
        telegram: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Other = mongoose.model('Other', otherSchema)

export default Other
