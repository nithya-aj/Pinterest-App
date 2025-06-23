import express from 'express'
import userRouter from './routes/user.route.js'
import pinRouter from './routes/pin.route.js'
import commentRouter from './routes/comment.route.js'
import boardRouter from './routes/board.route.js'
import connectDB from './util/connectDB.js'

const app = express()

app.use("/users", userRouter)
app.use("/pin", pinRouter)
app.use("/comment", commentRouter)
app.use("/board", boardRouter)

app.listen(3000, () => {
    connectDB()
    console.log("Server is running!")
})