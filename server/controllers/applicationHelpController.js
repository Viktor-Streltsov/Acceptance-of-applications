const {ApplicationHelp} = require('../models/models')
const ApiError = require('../error/ApiError')

class ApplicationHelpController {
    async create(req, res, next) {
        try {
            const {phone, name} = req.body
            const applicationHelp = await ApplicationHelp.create({phone, name})
            return res.json(applicationHelp)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const applicationHelp = await ApplicationHelp.findAll()
        return res.json(applicationHelp)
    }
}

module.exports = new ApplicationHelpController()