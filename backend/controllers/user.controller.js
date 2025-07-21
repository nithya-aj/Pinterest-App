import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {
    const { userName, displayName, email, password } = req.body

    if (!userName || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" })
    }

    const newHashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({
        userName,
        displayName,
        email,
        hashedPassword: newHashedPassword
    })

    const { hashedPassword, ...userDetails } = user.toObject();

    res.status(201).json(userDetails)

}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required!" })
    }

    const user = await User.findOne({ email })

    if (!user) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const isPassCorrect = await bcrypt.compare(password, user.hashedPassword)

    if (!isPassCorrect) {
        return res.status(401).json({ message: "Invalid email or password" })
    }

    const { hashedPassword, ...userDetails } = user.toObject();

    res.status(200).json(userDetails)
}

export const logoutUser = async (req, res) => {

}

export const getUser = async (req, res) => {
    const { userName } = req.params
    const user = await User.findOne({ userName })
    const { hashedPassword, ...userDetails } = user.toObject();
    res.status(200).json(userDetails)
}