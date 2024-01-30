async function createCardsComponent(container, section, page, contentType) {
  try {
    const cardsResponse = await fetchContentful(page, contentType, "all");
    createCards(container, cardsResponse);
    addEventToCards(cardsResponse, section);
  } catch (error) {
    console.error("Error al agregar el elemento 'Cards'", error);
  }
}

function createCards(container, cardsResponse) {
  cardsResponse.map((card, index) => {
    const cardElement = createCard(card);

    if (index > 2) cardElement.classList.add("card_hidden");

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

function addEventToCards(cardsResponse, section) {
  const cardsPerGroup = 3;
  const totalCards = cardsResponse.length;
  let showGroups = Math.ceil(totalCards / cardsPerGroup);

  if (totalCards > cardsPerGroup) {
    let showMoreCards = true;
    const button = createButton("card__button", "Show more");

    section.appendChild(button);

    button.addEventListener("click", () => {
      const cards = document.querySelectorAll(".card");

      if (showMoreCards) {
        showNextGroup(cards, showGroups * cardsPerGroup);
        showGroups--;

        if (showGroups === 1) {
          button.textContent = "Show Less";
          showMoreCards = false;
        }
      } else {
        hidePreviousGroup(cards, totalCards - cardsPerGroup);
        showGroups = Math.ceil(totalCards / cardsPerGroup);
        button.textContent = "Show More";
        showMoreCards = true;
      }
    });
  }
}

function showNextGroup(cards, countCards) {
  cards.forEach((card, index) => {
    if (index < countCards) {
      card.classList.remove("card_hidden");
    } else {
      card.classList.add("card_hidden");
    }
  });
}

function hidePreviousGroup(cards, countCards) {
  const reversedCards = Array.from(cards).reverse();

  reversedCards.forEach((card, index) => {
    if (index < countCards) {
      card.classList.add("card_hidden");
    } else {
      card.classList.remove("card_hidden");
    }
  });
}
