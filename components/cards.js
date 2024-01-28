async function createCardsComponent(container, page, contentType) {
  try {
    const cardsResponse = await fetchContentful(page, contentType, "all");
    createCards(container, cardsResponse);
  } catch (error) {
    console.error("Error al agregar el elemento 'Cards'", error);
  }
}

function createCards(container, cardsResponse) {
  cardsResponse.forEach((card) => {
    const cardElement = createCard(card);
    container.appendChild(cardElement);
  });
}

function createCard(card) {
  const cardElement = createDiv("card");
  const cardInfo = createDiv("card-info");
  const imgElement = createImg(
    "card-img",
    card.img.file.url,
    card.img.description
  );
  const titleElement = createContentText("h2", "card-title", card.title);
  const textElement = createContentText("p", "card-text", card.description);

  cardInfo.appendChild(titleElement);
  cardInfo.appendChild(textElement);
  cardElement.appendChild(imgElement);
  cardElement.appendChild(cardInfo);

  return cardElement;
}
