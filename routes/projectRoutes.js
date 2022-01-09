import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Project from './../model/projectModel.js'
const router = express.Router()

// @desc    Fetch all projects
// @route   GET /projects
// @access  Public
router.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const projects = await Project.find({})

        res.json(projects)
    })
)

// @desc    Fetch single project
// @route   GET /projects/:id
// @access  Public
router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const project = await Project.findById(req.params.id)

        if (project) res.json(project)
        else {
            res.status(404)
            throw new Error('Project not found')
        }
    })
)

// @desc    Update a project
// @route   PUT /projects/:id
// @access  Private/Admin
router.put(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const data = req.body
        const project = await Project.findById(req.params.id)

        if (project) {
            project.image = data.image
            project.made = data.made
            project.name = data.name
            project.comment = data.comment
            project.link = data.link

            const updatedProject = await project.save()
            res.json(updatedProject)
        } else {
            res.status(404)
            throw new Error('Project not Found')
        }
    })
)

// @desc    Update a project like
// @route   PUT /projects/like/:id
// @access  Public
router.put(
    '/like/:id',
    expressAsyncHandler(async (req, res) => {
        const { like } = req.body

        const project = await Project.findById(req.params.id)

        if (project) {
            project.like = like
            const updatedLike = project.save()
            res.json(updatedLike)
        } else {
            res.status(404)
            throw new Error('Project not found')
        }
    })
)

// @desc    Create a project
// @route   POST /projects
// @access  Private/Admin
router.post(
    '/',
    expressAsyncHandler(async (req, res) => {
        const data = req.body
        const project = new Project({
            ...data,
            like: 0,
        })

        const createdProject = await project.save()
        res.status(201).json(createdProject)
    })
)

// @desc    Delete a project
// @route   DELETE /projects/:id
// @access  Private/Admin
router.delete(
    '/:id',
    expressAsyncHandler(async (req, res) => {
        const project = await Project.findById(req.params.id)

        if (project) {
            await project.remove()
            res.json({ message: 'Project deleted' })
        } else {
            res.status(404)
            throw new Error('Project not found')
        }
    })
)

export default router
