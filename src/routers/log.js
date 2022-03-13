const express = require('express')
const Log = require('../models/log')
const auth = require('../middleware/auth')
const router = new express.Router()

router.get('/logs', auth, async (req, res) => {

    const log = await Log.find()

    if (!log) {
        return res.status(404).send()
    }

    res.send(log)

})

router.delete('/logs', auth, async (req, res) => {
    try {
        const log = await Log.deleteMany()

        if (!log) {
            res.status(404).send()
        }

        res.send(log)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router