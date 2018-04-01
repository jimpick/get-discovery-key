#! /usr/bin/env node

const crypto = require('hypercore/lib/crypto')
const toBuffer = require('to-buffer')

let key = process.argv[2]
if (!key) {
  console.error('Need a key!')
  process.exit(1)
}
key = toBuffer(key, 'hex')
const dk = crypto.discoveryKey(key)
const dnsDk = dk.slice(0, 20)
console.log('          Key:', key.toString('hex'))
console.log('Discovery Key:', dk.toString('hex'))
console.log(
  ' DNS lookup 1: ' +
  'dns-discovery lookup --server discovery1.publicbits.org ' +
  dnsDk.toString('hex')
)
console.log(
  ' DNS lookup 2: ' +
  'dns-discovery lookup --server discovery2.publicbits.org ' +
  dnsDk.toString('hex')
)
