function createDiv(classDiv) {
  const divElement = document.createElement("div");
  divElement.className = classDiv;

  return divElement;
}

function createContentText(tag, className, text) {
  const tagEl = document.createElement(tag);
  tagEl.className = className;

  if (tag === "span") tagEl.innerText = " " + text;
  else tagEl.innerText = text;

  return tagEl;
}

function createImg(className, url, description) {
  const imgEl = document.createElement("img");
  imgEl.className = className;
  imgEl.src = url;
  imgEl.alt = description;

  return imgEl;
}

function createInput(type, className, id, placeholder) {
  const inputEl = document.createElement("input");
  inputEl.type = type;
  inputEl.className = className;
  inputEl.id = id;
  inputEl.placeholder = placeholder;

  return inputEl;
}

function createLabel(className, forEl, text) {
  const labelEl = document.createElement("label");
  labelEl.className = className;
  labelEl.setAttribute("for", forEl);
  labelEl.textContent = text;

  return labelEl;
}

function createButton(className, text) {
  const buttonEl = document.createElement("button");
  buttonEl.className = className;
  buttonEl.textContent = text;

  return buttonEl;
}

function createTextarea(className, id, cols, rows) {
  const textareaEl = document.createElement("textarea");
  textareaEl.className = className;
  textareaEl.id = id;
  textareaEl.cols = cols;
  textareaEl.rows = rows;

  return textareaEl;
}

function createLink(className, url) {
  const linkEl = document.createElement("a");
  linkEl.className = className;
  linkEl.href = url;

  return linkEl;
}
