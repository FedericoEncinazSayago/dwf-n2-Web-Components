async function createPresentationComponent(container, page) {
  try {
    const presentation = await fetchContentful(page, "presentation", "");
    const divEl = createDiv("img-content");
    const h1El = createContentText(
      "h1",
      "text-presentacion",
      presentation.title
    );
    const spanEl = createContentText(
      "span",
      "text-presentation_blue",
      presentation.textBlue
    );
    divEl.appendChild(
      createImg(
        "presentation-img",
        presentation.img.file.url,
        presentation.img.description
      )
    );

    console.log(presentation);

    h1El.appendChild(spanEl);
    container.appendChild(h1El);
    container.appendChild(divEl);
  } catch (error) {
    console.error("Error fetching presentation:", error);
  }
}
