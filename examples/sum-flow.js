// @flow

function sum (a: number, b: number): number {
  return a + b
}

sum(1, 1)
sum('1', '2')
sum(2, '3')

export default sum
