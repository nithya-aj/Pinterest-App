import User from '../models/user.model.js'
import Follow from '../models/follow.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60 * 1000
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

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 30 * 24 * 60 * 60 * 1000
    })

    const { hashedPassword, ...userDetails } = user.toObject();

    res.status(200).json(userDetails)
}

export const logoutUser = async (req, res) => {

    res.clearCookie("token")
    res.status(200).json({ message: "Logout Successful" })

}

export const getUser = async (req, res) => {
    const { userName } = req.params
    const user = await User.findOne({ userName })
    const { hashedPassword, ...userDetails } = user.toObject();

    const followerCount = await Follow.countDocuments({ following: user._id })
    const followingCount = await Follow.countDocuments({ follower: user._id })

    const token = req.cookies.token

    if (!token) {
        res.status(200).json({ ...userDetails, followerCount, followingCount, isFollowing: false })
    } else {
        jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
            if (!err) {
                const isExists = await Follow.exists({
                    follower: payload.userId,
                    following: user._id
                })
                res.status(200).json({
                    ...userDetails,
                    followerCount,
                    followingCount,
                    isFollowing: isExists ? true : false
                })
            }
        })
    }

}

export const followUser = async (req, res) => {

    const { userName } = req.params

    const user = await User.findOne({ userName })

    const isFollowing = await Follow.exists({
        follower: req.userId,
        following: user._id
    })

    if (isFollowing) {
        await Follow.deleteOne({ follower: req.userId, following: user._id })
    } else {
        await Follow.create({ follower: req.userId, following: user._id })
    }

    res.status(200).json({ message: "Successful" })
}