// @flow

type Char = {
  health: number,
  damage: [number, number],
  defence: number
}

function hit (char: Char, target: Char): void {
  target.health -= char.damage - (target.defence / 100)
}

hit('char', 'target')
hit(1, 0)
hit([], {})
hit({
  health: 100,
  damage: 12,
  defence: 0
}, {
  health: 30,
  damage: { from: 0, to: 12 },
  defence: 'Full'
})

export default hit
