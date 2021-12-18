const express = require('express')
const router = express.Router()
const controller = require('./mint.controller')

router.post('/mintnft', controller.mint_nft_post)
router.post('/kiptransfer',controller.KIP7Token_transfer)
router.post('/kipswap',controller.kipswap_post)
module.exports = router