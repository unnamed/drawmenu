/**
 * Replaces the given element by the given replacement
 * @param {HTMLElement} element The replaced element
 * @param {HTMLElement} replacement The replacement
 */
function replace(element, replacement) {
  element.parentNode.replaceChild(replacement, element);
}

const formatter = new MCFormat({colorChar: '&', allowMagic: true});

/**
 * Formats the given text into the specified
 * element using a single children
 * @param {HTMLElement} element The element where
 * the rich text will be put
 * @param {string} text The raw text
 */
MCFormat.prototype.formatInto = function (element, text) {
  const children = element.children;
  const output = this.format(text);
  if (children.length === 0) {
    element.appendChild(output);
  } else {
    replace(children.item(0), output);
  }
};