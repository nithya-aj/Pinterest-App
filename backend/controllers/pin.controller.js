import Pin from '../models/pin.model.js'
import User from '../models/user.model.js'
import sharp from 'sharp'
import Imagekit from 'imagekit'

export const getPins = async (req, res) => {
    const pageNumber = Number(req.query.cursor) || 0;
    const search = req.query.search;
    const userId = req.query.userId;
    const boardId = req.query.boardId;
    const LIMIT = 21;
    const pins = await Pin.find(search ? {
        $or: [
            { title: { $regex: search, $options: "i" } },
            { tags: { $in: [search] } }
        ]
    } : userId
        ? { user: userId } : boardId
            ? { board: boardId } : {}
    )
        .limit(LIMIT).skip(pageNumber * LIMIT)

    const hasNextPage = pins.length === LIMIT;

    res.status(200).json({ pins, nextCursor: hasNextPage ? pageNumber + 1 : null })
}

export const getPin = async (req, res) => {
    const { id } = req.params;
    const pin = await Pin.findById(id).populate("user", "userName img displayName")
    res.status(200).json(pin)
}

export const createPin = async (req, res) => {
    const { title, description, link, board, tags, textOptions, canvasOptions } = req.body;

    const media = req.files.media

    if (!title, !description, !media) {
        return res.status(400).json({ message: "All fileds are required" })
    }

    const parsedTextOptions = JSON.parse(textOptions || "{}")
    const parsedCanvasOptions = JSON.parse(canvasOptions || "{}")

    const metadata = await sharp(media.data).metadata()

    const originalOrientation = metadata.width < metadata.height ? "portrait" : "landscape"
    const originalAspectRatio = metadata.height / metadata.height
    let clientAspectRatio
    let width
    let height

    if (parsedCanvasOptions.size !== "origin") {
        clientAspectRatio = parsedCanvasOptions.size.split(":")[0] / parsedCanvasOptions.size.split(":")[1]
    } else {
        parsedCanvasOptions.originalOrientation === originalOrientation ? (clientAspectRatio = originalOrientation) : clientAspectRatio = 1 / originalAspectRatio
    }

    width = metadata.width
    height = metadata.width / clientAspectRatio

    const imagekit = new Imagekit({
        publicKey: process.env.IK_PUBLIC_KEY,
        privateKey: process.env.IK_PRIVATE_KEY,
        urlEndpoint: process.env.IK_URL_ENDPOINT
    })

    imagekit.upload({
        file: media.data,
        fileName : media.name,
        folder: "test",
        transformation:{
            pre: 
        }
    })
}