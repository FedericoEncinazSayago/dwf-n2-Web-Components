function createFormComponent(container, labels) {
  const formEl = document.createElement("form");
  formEl.classList.add("form");

  createFormElements(labels, formEl);
  addButtonInForm(formEl);
  addEventListenerForm(formEl);
  container.appendChild(formEl);
}

function createFormElements(labels, formEl) {
  labels.forEach((label) => {
    const divEl = createDiv("form-group");
    const labelEl = createLabel(label.class, label.for, label.text);
    let inputEl;

    if (label.typeInput === "textarea")
      inputEl = createTextarea("form__textarea", label.for, 30, 10, label.for);
    else
      inputEl = createInput(
        label.typeInput,
        "form__input",
        label.for,
        label.placeholder,
        label.for
      );

    divEl.appendChild(labelEl);
    divEl.appendChild(inputEl);
    formEl.appendChild(divEl);
  });
}

function addButtonInForm(form) {
  const buttonEl = createButton("form__button", "Send");
  const imgEl = createImg("send", "./img/enviar-correo.png");

  buttonEl.appendChild(imgEl);
  form.appendChild(buttonEl);
}

function addEventListenerForm(form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const requestOptions = createRequestOption(new FormData(event.target));
      const result = await fetchApx(
        "https://apx-api.vercel.app/api/utils/dwf",
        requestOptions
      );

      console.log(result);
    } catch (error) {
      console.error("Error en la solicitud:", error.message);
    }
  });
}

function createRequestOption(data) {
  const value = Object.fromEntries(data.entries());
  const JSONEmail = createToObjectEmail(value);

  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JSONEmail),
  };
}

function createToObjectEmail(data) {
  return {
    to: data.email,
    message: data.message,
  };
}
