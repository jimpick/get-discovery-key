#! /usr/bin/env node

const crypto = require('hypercore/lib/crypto')
const toBuffer = require('to-buffer')
const swarmDefaults = require('dat-swarm-defaults')

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
swarmDefaults().dns.server.forEach(server => {
  console.log(
    ' DNS lookup 1: ' +
    `dns-discovery lookup --server ${server} ` +
    dnsDk.toString('hex')
  )
})
