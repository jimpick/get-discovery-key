#! /usr/bin/env node

const crypto = require('hypercore/lib/crypto')
const toBuffer = require('to-buffer')

const key = process.argv[2]
if (!key) {
  console.error('Need a key!')
  process.exit(1)
}
console.log(crypto.discoveryKey(toBuffer(key)).toString('hex'))
