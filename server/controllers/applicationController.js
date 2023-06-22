const {Application, User} = require('../models/models')
const ApiError = require('../error/ApiError')

class ApplicationController {
    async create(req, res, next) {
        try {
            const {phone, name, address, time, userId} = req.body
            const application = await Application.create({phone, name, address, time, userId})
            return res.json(application)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const application = await Application.findAll()
        return res.json(application)
    }

    async getOne(req, res) {
        const {id} = req.params
        const application = await Application.findOne(
            {
                where: {id}
            }
        )
        return res.json(application)
    }

    async getUserAll(req, res) {
        const {userId} = req.params
        const application = await Application.findAll(
            {
                where: {userId},
                include: [
                    {
                        model: User,
                        attributes: ['login', 'email', 'role']
                    }
                ]
            }
        )
        return res.json(application)
    }


}

module.exports = new ApplicationController()