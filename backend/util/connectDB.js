import mongoose, { mongo } from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB is connected!")
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR")
    }
}

export default connectDB