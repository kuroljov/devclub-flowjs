// @flow

class Hero {
  name: string
  damage: number

  constructor (name: string) {
    this.name = name
    this.health = 100
    this.damage = 2.6
    this.defence = 0
  }

  hit (target: Hero) {
    target.health -= this.damage - (target.defence / 100)
  }
}

const barb: Hero = new Hero('Dordrud')

export default Hero
export { barb }
