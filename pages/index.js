function main() {
  const header = document.querySelector(".header");
  const presentation = document.querySelector(".presentation-section");
  const about = document.querySelector(".about-section");
  const cardsSection = document.querySelector(".cards-section");
  const cards = document.querySelector(".cards-content");
  const formSection = document.querySelector(".form-section");
  const footer = document.querySelector(".footer");

  addComponentHeaderInContainer(header);
  createAboutComponent(about, "about-me");
  createPresentationComponent(presentation, "index");
  createCardsComponent(cards, cardsSection, "cards", "service");
  addComponentFormInContainer(formSection);
  addComponentFooterInContainer(footer);
}

main();

function addComponentHeaderInContainer(container) {
  const divs = [
    { class: "logo-content" },
    { class: "burger-content" },
    { class: "menu-header", subContainer: "menu-content" },
  ];

  const links = [
    { class: "link", text: "Home", url: "./index.html" },
    { class: "link", text: "Portfolio", url: "./portfolio.html" },
    { class: "link", text: "Services", url: "./services.html" },
    { class: "link", text: "Contact", url: "./contact.html" },
  ];

  const imgs = [
    {
      class: "burger-dash",
      url: "./img/burger-dash.svg",
      divClass: "burger-content",
      description: "An image of burger dash",
    },
    {
      class: "close",
      url: "./img/close.svg",
      divClass: "menu-content",
      description: "An image of close",
    },
  ];

  createHeaderComponent(container, links, imgs, divs);
}

function addComponentFormInContainer(container) {
  const labels = [
    {
      class: "form__label",
      for: "name",
      text: "Name",
      placeholder: "Name",
      typeInput: "text",
      value: "name",
    },
    {
      class: "form__label",
      for: "email",
      text: "Email",
      placeholder: "Email",
      typeInput: "email",
    },
    {
      class: "form__label",
      for: "message",
      text: "Message",
      placeholder: "Message",
      typeInput: "textarea",
    },
  ];

  createFormComponent(container, labels);
}

function addComponentFooterInContainer(container) {
  const iconMenu = [
    {
      text: "Home",
      url: "./img/home.svg",
      src: "./index.html",
      description: "An image of home",
    },
    {
      text: "Services",
      url: "./img/user.svg",
      src: "./servicios.html",
      description: "An image of user",
    },
    {
      text: "Contact",
      url: "./img/phone.svg",
      src: "./contacto.html",
      description: "An image of phone",
    },
  ];

  const iconSocial = [
    {
      url: "./img/linkedin.svg",
      src: "https://www.linkedin.com/in/federico-encinaz-sayago-2634851a3/",
      description: "An image of linkedin",
    },
    {
      url: "./img/github.svg",
      src: "https://github.com/FedericoEncinazSayago",
      description: "An image of github",
    },
    {
      url: "./img/twitter.svg",
      src: "https://twitter.com/FedericoEncinaz",
      description: "An image of twitter",
    },
  ];

  createFooterComponent(container, iconMenu, iconSocial);
}
