const Router = require('express')
const router = new Router()
const tariffRouter = require('./tariffRouter')
const userRouter = require('./userRouter')
const userTariffRouter = require('./userTariffRouter')
const applicationRouter = require('./applicationRouter')
const applicationHelpRouter = require('./applicationHelpRouter')

router.use('/tariff', tariffRouter)
router.use('/user', userRouter)
router.use('/application', applicationRouter)
router.use('/application_help', applicationHelpRouter)
router.use('/user_tariff', userTariffRouter)


module.exports = router