export function createNewNode(htmlTag, className, innerText) {
  const newNode = document.createElement(htmlTag);
  if (className) {
    newNode.className = className;
  }
  if (innerText) {
    let text = document.createTextNode(innerText);
    newNode.appendChild(text);
  }
  return newNode;
}

/**
 * @param {[{}]: Array} arr an array of objects with a text property and a link property
 * @param {'': String} ulClassName name of the CSS class
 * @returns Element: list of links
 */
export function createUnorderedList(arr, ulClassName) {
  const ul = createNewNode("ul", ulClassName);
  arr.forEach(item => {
    const li = createNewNode("li");
    const a = createNewNode("a", null, item.text);
    addAttributes(a, { key: "href", value: item.link });
    li.appendChild(a);
    ul.appendChild(li);
  });
  return ul;
}

/**
 *
 * @param {DOMElement} element selected DOM element
 * @param {[{}] or {}} options an array of objects or an object with 2 parameters:
 * (a) key, which is the attribute name in JS, (b) value, the value of the attribute
 * @returns undefined
 */
export function addAttributes(element, options) {
  if (Array.isArray(options)) {
    options.forEach(option => {
      element[option.key] = option.value;
    });
    return;
  }
  if (typeof options === "object") {
    element[options.key] = options.value;
  }
}
