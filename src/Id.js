// @flow

const crypto = require('crypto')

function randStr (bytes: number = 4): string {
  return crypto.randomBytes(bytes).toString('hex')
}

class Id {
  hash: [string, string]
  timestamp: string

  constructor () {
    this.hash = [randStr(), randStr()]
    this.timestamp = Date.now().toString(36)
  }

  get createdAt (): Date {
    return new Date(parseInt(this.timestamp, 36))
  }

  get id (): string {
    return [this.timestamp, ...this.hash].join('-')
  }
}

module.exports = Id
