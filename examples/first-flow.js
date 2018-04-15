// @flow

function first (arr: Array<string>): string {
  return arr[0]
}

first('foo')
first({ arr: [1, 2, 4 ]})
first([1, 2, 3])
first(['a', 'b', 'c'])

export default first
