import express from 'express'
import { brd } from '../controllers/board.controller.js'

const router = express.Router()

router.get("/test", brd)

export default router