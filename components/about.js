async function createAboutComponent(container, pageId) {
  try {
    const aboutPageResponse = await fetchContentful(pageId, "about", "");
    const aboutContentDiv = createAboutMeContentDiv(aboutPageResponse);

    container.appendChild(aboutContentDiv);

    const imgElement = createImg(
      "img-about",
      aboutPageResponse.img.file.url,
      aboutPageResponse.img.description
    );

    container.appendChild(imgElement);
  } catch (error) {
    console.error("Error al agregar el elemento 'About'", error);
  }
}

function createAboutMeContentDiv(response) {
  const divElement = createDiv("about-content");
  const titleElement = createContentText("h2", "title-about", response.title);
  const textElement = createContentText(
    "p",
    "text-about",
    response.text.content[0].content[0].value
  );

  divElement.appendChild(titleElement);
  divElement.appendChild(textElement);

  return divElement;
}
