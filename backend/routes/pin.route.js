import express from 'express'
import { pin } from '../controllers/pin.controller.js'

const router = express.Router()

router.get("/test", pin)

export default router