var express = require('express')
var router = express.Router()
var bitcoin = require('bitcoinjs-lib')

/* GET home page. */
router.get('/', function (req, res, next) {
  var keyPair = bitcoin.ECPair.makeRandom()

  var bitWIF = keyPair.toWIF()
  var bitAddress = keyPair.getAddress()
  // Print your private key (in WIF format)
  console.log('bitWIF ' + bitWIF)
  // => Kxr9tQED9H44gCmp6HAdmemAzU3n84H3dGkuWTKvE23JgHMW8gct

  // Print your public key address
  console.log('bitAddress ' + bitAddress)
  // => 14bZ7YWde4KdRb5YN7GYkToz3EHVCvRxkF

  res.render('index', { title: 'Bitfun', bitWIF: bitWIF, bitAddress: bitAddress })
})

module.exports = router
