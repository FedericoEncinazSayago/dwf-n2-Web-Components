function createFooterComponent(container, iconsMenu, iconsSocial) {
  const divSocial = createIconAll(iconsSocial, "social", "icon-social");
  const divMenu = createIconAll(iconsMenu, "menu", "icon-menu");

  container.appendChild(divMenu);
  container.appendChild(divSocial);
}

function createIcon(className, icon) {
  const divElement = createDiv(className);
  const imgIcon = createImg("icon", icon.url, icon.description);
  const link = createLink("icon-link", icon.src);

  link.appendChild(imgIcon);

  if (icon.text) {
    const textElement = createContentText("span", "icon-text", icon.text);
    link.appendChild(textElement);
  }

  console.log(icon);
  console.log(link);

  divElement.appendChild(link);

  return divElement;
}

function createIconAll(icons, className, classIcon) {
  const divElement = createDiv(className);

  icons.forEach((icon) => {
    const newIcon = createIcon(classIcon, icon);
    divElement.appendChild(newIcon);
  });

  return divElement;
}
