const spaceId = "tvmnpvlzdyt0";
const accessToken = "Virl12yVNK8z-Ar2ihKg-yuhklBEjQXVka7iSaIes7Y";
const environment = "master";
const contentType = "about";

async function fetchContentful(page, contentType, typeReturn) {
  try {
    const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error fetching Contentful data");
    }

    const data = await response.json();

    return typeReturn === "all"
      ? getAllItems(data)
      : searchItemWithContentType(page, data);
  } catch (error) {
    throw new Error("Error fetching Contentful data: " + error.message);
  }
}

function getAllItems(data) {
  const assets = data.includes.Asset;
  const items = data.items;

  return items.map((item) => {
    const url = item.fields.img.sys.id;
    return { ...item.fields, img: searchImg(assets, url) };
  });
}

function searchItemWithContentType(page, data) {
  const assets = data.includes.Asset;
  const foundItem = data.items.find((item) => item.fields.id == page);

  if (foundItem) {
    const url = foundItem.fields.img.sys.id;
    return { ...foundItem.fields, img: searchImg(assets, url) };
  }

  throw new Error(`Presentation with ID ${page} not found`);
}

function searchImg(assets, url) {
  const foundAsset = assets.find((asset) => asset.sys.id == url);

  if (foundAsset) {
    return { ...foundAsset.fields };
  }

  throw new Error(`Image with ID ${url} not found`);
}
