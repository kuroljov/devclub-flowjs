// @flow

function $ (id: string): HTMLElement | null {
  return document.getElementById(id)
}

$('app').classList.add('loading')

export default $
