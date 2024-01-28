function createHeaderComponent(container, links, imgs, classDivs) {
  const divsEl = createDivsWithClass(classDivs);
  const navEl = document.createElement("nav");

  navEl.className = "nav";

  divsEl.forEach((div) => {
    addImgInHeader(div, imgs);
  });

  addTextLogo(divsEl[0]);
  addLinksInNav(navEl, links);
  addElementInHeader(container, divsEl, navEl);
}

function createDivsWithClass(classDivs) {
  const divArray = [];

  classDivs.forEach((element) => {
    const newDiv = createDiv(element.class);
    divArray.push(newDiv);
  });

  return divArray;
}

function addImgInHeader(div, imgs) {
  imgs.forEach((img) => {
    if (img.divClass == div.className) {
      const imgEl = createImg(img.class, img.url, img.description);
      div.appendChild(imgEl);
    }
  });
}

function addTextLogo(div) {
  const spanEl = createContentText("span", "text-logo", "FS");
  div.appendChild(spanEl);
}

function addElementInHeader(header, divs, nav) {
  divs.forEach((div) => {
    header.appendChild(div);
  });

  header.appendChild(nav);
}

function addLinksInNav(nav, links) {
  links.forEach((link) => {
    const linkEl = createLink(link.class, link.url);
    linkEl.textContent = link.text;

    nav.appendChild(linkEl);
  });
}
