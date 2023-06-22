const Router = require('express')
const router = new Router()
const applicationController = require('../controllers/applicationController')

router.post('/', applicationController.create)
router.get('/', applicationController.getAll)
router.get('/:id', applicationController.getOne)
router.get('/user/:userId', applicationController.getUserAll)

module.exports = router