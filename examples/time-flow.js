// @flow

type Time = {
  hour: number,
  minute: number
}

function parseTime (time: string): Time | null {
  const parsed: Array<string> = time.split(/:/)

  if (parsed.length !== 2) return null

  return { hour: parsed[0], minute: parsed[1] }
}

parseTime('10:00')

export default parseTime
