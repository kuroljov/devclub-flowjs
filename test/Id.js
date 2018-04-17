// @flow

const Table = require('cli-table')
const t = require('assert')
const Id = require('../src/Id')

const id = new Id()

t.strictEqual(typeof id.timestamp, 'string')

t.ok(Array.isArray(id.hash))
t.strictEqual(id.hash.length, 2)
t.ok(id.hash.every(x => typeof x === 'string'))
t.ok(id.hash.every(x => x.length === 8))

t.strictEqual(typeof id.id, 'string')

const now = new Date()
t.ok(id.createdAt instanceof Date)
t.strictEqual(id.createdAt.getFullYear(), now.getFullYear())
t.strictEqual(id.createdAt.getMonth(), now.getMonth())
t.strictEqual(id.createdAt.getDate(), now.getDate())

const table = new Table({
  head: ['Id', 'Created At'],
})

table.push([id.id, id.createdAt.toString()])

console.log(table.toString())
