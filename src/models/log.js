const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    reqUrl: {
        type: String,
        required: true,
        trim: true
    },
    reqMethod: {
        type: String,
        required: true
    },
    reqData: {
        type: Object
    },
    owner: {
        type: String
    }
}, {
    timestamps: true
})

const Log = mongoose.model('Log', logSchema)

module.exports = Log