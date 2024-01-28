function createFormComponent(container, labels) {
  const formEl = document.createElement("form");
  formEl.classList.add("form");

  labels.forEach((label) => {
    const divEl = createDiv("form-group");
    const labelEl = createLabel(label.class, label.for, label.text);
    let inputEl;

    if (label.typeInput === "textarea")
      inputEl = createTextarea("form__textarea", label.for, 30, 10);
    else
      inputEl = createInput(
        label.typeInput,
        "form__input",
        label.for,
        label.placeholder
      );

    divEl.appendChild(labelEl);
    divEl.appendChild(inputEl);
    formEl.appendChild(divEl);
  });

  addButtonInForm(formEl);
  container.appendChild(formEl);
}

function addButtonInForm(form) {
  const buttonEl = createButton("form__button", "Send");
  const imgEl = createImg("send", "./img/enviar-correo.png");

  buttonEl.appendChild(imgEl);
  form.appendChild(buttonEl);
}
