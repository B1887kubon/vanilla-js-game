export default class Counter {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
    this.update()
  }

  addPlayerPoint() {
    this.playerPoints++
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints++
    this.update()
  }
  update() {
    this.el.innerHTML =
      'Player ' + this.playerPoints + ' : ' + this.birdsPoints + ' Birds'
  }

  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
