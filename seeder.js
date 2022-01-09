import dotenv from 'dotenv'
import colors from 'colors'
import projects from './data/projects.js'
import other from './data/other.js'
import Project from './model/projectModel.js'
import Other from './model/otherModel.js'
import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Project.deleteMany()
        await Other.deleteMany()

        await Project.insertMany(projects)
        await Other.insertMany(other)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Project.deleteMany()
        await Other.deleteMany()

        console.log('Data destroyed!'.red.inverse)
        process.exit()
    } catch (err) {
        console.log(`${err}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
