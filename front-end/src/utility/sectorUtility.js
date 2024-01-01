export const fetcher = (...args) => fetch(...args).then(res => res.json());

export const mapOptions = (item) => {
  const mappedItem = {
    value: item.name,
    label: item.name,
  };

  if (item.children && item.children.length > 0) {
    mappedItem.children = item.children.map(mapOptions);
  } else {
    mappedItem.children = undefined;
  }

  return mappedItem;
};


export const makeOtherLast = (items) => {
  const otherIndex = items.findIndex(item => item.value && item.value.toLowerCase().startsWith('other'));

  if (otherIndex !== -1) {
    const [other] = items.splice(otherIndex, 1);
    items.push(other);
  }

  items.forEach(item => {
    if (item.children && item.children.length > 0) {
      makeOtherLast(item.children);
    }
  });
};


