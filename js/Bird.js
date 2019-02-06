export default class Bird {
  defaultConfig = {
    color: 'orange',
    speed: 1 + Math.random() * 2,
    position: 0,
  }

  constructor(config) {
    config = { ...this.defaultConfig, ...config }
    const { color, speed, position, onRemove, onClick, onEscape } = config
    this.onClick = onClick
    this.color = color
    this.position = position
    this.onRemove = onRemove
    this.onEscape = onEscape
    this.speed = speed
    this.el = this.render()
    this.addClickHandler()
  }

  addClickHandler() {
    this.el.addEventListener('click', () => {
      this.onClick()
      this.remove()
    })
  }

  remove() {
    this.onRemove(this)
    this.el.remove()
  }

  update() {
    this.position = this.position + this.speed
    if (this.position > window.innerWidth) {
      this.remove()
      this.onEscape()
    } else {
      this.el.style.left = this.position + 'px'
    }
  }

  render() {
    const el = document.createElement('div')
    el.className = 'bird'
    el.style.background = this.color
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
}
