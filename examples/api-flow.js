// @flow

type Id = { id: string }
type UserBody = { name: string, points: number }
type TaskBody = { name: string, weight: number }

type User = Id & UserBody
type Task = Id & TaskBody

function findUsers (): Promise<Array<User>> {
  return fetch('/api/users').then(res => res.json())
}
function findTasks (): Promise<Array<Task>> {
  return fetch('/api/tasks').then(res => res.json())
}

export { findUsers, findTasks }
