import express from 'express'
import { cmt } from '../controllers/comment.controller.js'

const router = express.Router()

router.get("/test", cmt)

export default router