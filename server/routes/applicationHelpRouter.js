const Router = require('express')
const router = new Router()
const applicationHelpController = require('../controllers/applicationHelpController')

router.post('/', applicationHelpController.create)
router.get('/', applicationHelpController.getAll)

module.exports = router