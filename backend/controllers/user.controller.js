import User from '../models/user.model.js'

export const getUser = async (req, res) => {
    const { userName } = req.params
    const user = await User.findOne({ userName })
    const { hashedPassword, ...userDetails } = user.toObject();
    res.status(200).json(userDetails)
}