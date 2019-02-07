export default class Hunter {
  position = window.innerWidth / 2
  speed = 0

  constructor() {
    this.el = this.render()
    this.setupMovement()
  }

  update() {
    this.position += this.speed
    this.el.style.left = this.position + this.speed + 'px'
  }

  setupMovement() {
    document.body.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        this.speed = -5
      } else if (event.key === 'ArrowRight') {
        this.speed = 5
      }
    })

    document.body.addEventListener('keyup', event => {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        this.speed = 0
      }
    })
  }

  render() {
    const el = document.createElement('div')
    el.className = 'hunter'
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
