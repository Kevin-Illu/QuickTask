import { ElementOptions } from './IElementFactory'

class ElementFactory {
  static supportedTypes = new Map<string, boolean>([
    ['input', true],
    ['textarea', true],
    ['select', true],
    ['option', true],
    ['button', true],
    ['label', true],
    ['form', true],
    ['div', true],
    ['header', true],
    ['nav', true],
    ['main', true],
    ['footer', true],
    ['section', true],
    ['a', true],
    ['p', true],
    ['span', true],
    ['h1', true],
    ['h2', true],
    ['h3', true],
    ['h4', true],
    ['h5', true],
    ['h6', true],
    ['ul', true],
    ['ol', true],
    ['li', true],
  ])

  static addSupportedType(type: string) {
    this.supportedTypes.set(type, true)
  }

  static removeSupportedType(type: string) {
    this.supportedTypes.delete(type)
  }

  public createElement(
    type: string,
    options: ElementOptions = {}
  ): HTMLElement {
    if (!ElementFactory.supportedTypes.has(type)) {
      throw new Error(`Element type "${type}" not supported.`)
    }

    const element = document.createElement(type)

    if (options.attributes) {
      Object.keys(options.attributes).forEach((key) => {
        if (options.attributes)
          element.setAttribute(key, options.attributes[key])
      })
    }

    if (options.styles) {
      Object.assign(element.style, options.styles)
    }

    return element
  }
}

export default ElementFactory
