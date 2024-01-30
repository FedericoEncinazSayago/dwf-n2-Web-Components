function createHeaderComponent(container, links, imgs, classDivs) {
  const divsEl = createDivsWithClass(classDivs, imgs);
  const navs = createNavsForHeader(links);

  addTextLogo(divsEl[0]);
  addElementsInHeader(container, divsEl, navs);
}

function createDivsWithClass(classDivs, imgs) {
  return classDivs.map((div) => {
    const divElement = createDiv(div.class);

    if (div.subContainer) {
      const subContainer = createDiv(div.subContainer);

      addImgsInContainer(subContainer, imgs);
      divElement.appendChild(subContainer);
    }

    addImgsInContainer(divElement, imgs);
    return divElement;
  });
}

function addImgsInContainer(div, imgs) {
  imgs.forEach((img) => {
    if (img.divClass === div.className) {
      const imgEl = createImg(img.class, img.url, img.description);
      div.appendChild(imgEl);
    }
  });
}

function createNavsForHeader(links) {
  const navHeader = createNav("nav-header");
  const navMenu = createNav("nav-menu-header");

  addLinksInNav(navMenu, links, "-menu");
  addLinksInNav(navHeader, links, "-header");

  return [navHeader, navMenu];
}

function addElementsInHeader(header, divs, navs) {
  addEventOpenMenu(divs[1], divs[2]);
  addEventCloseMenu(divs[2], divs[2].firstChild);

  header.appendChild(divs[0]);
  header.appendChild(divs[1]);
  header.appendChild(navs[0]);

  divs[2].appendChild(navs[1]);
  header.appendChild(divs[2]);
}

function addEventCloseMenu(menu, menuContent) {
  menuContent.addEventListener("click", () => {
    menu.classList.remove("menu-header_active");
  });
}

function addEventOpenMenu(burger, menu) {
  burger.addEventListener("click", () => {
    menu.classList.add("menu-header_active");
  });
}

function addTextLogo(div) {
  const spanEl = createContentText("span", "text-logo", "FS");
  div.appendChild(spanEl);
}
