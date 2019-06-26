let date = Date.now()
const Multer = require('multer')
const storage = Multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,  '/../uploads')
    },
    filename: (req, file, callback) => {
        callback(null, date + file.originalname)
    }


})

const upload = Multer({storage})

module.exports = upload