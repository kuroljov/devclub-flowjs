// @flow

type UserApi = { name: string, isActive: boolean }
type User = { name: string }

function filterActive (arr: Array<UserApi>): Array<User> {
  return arr.filter(x => x.isActive)
}

export default filterActive
