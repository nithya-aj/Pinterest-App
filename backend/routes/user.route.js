import express from 'express'
import { test } from '../controllers/user.controller.js'
import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

const router = express.Router()

router.post("/create", async (req, res) => {
    const userInfo = req.body

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    await User.create({
        displayName: req.body.displayName,
        userName: req.body.userName,
        email: req.body.email,
        hashedPassword: hashedPassword
    })
    console.log(userInfo, 'User Information')
    res.json("User created")
})

router.get("/test", test)

export default router