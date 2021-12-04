/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing user interface handling and loading
 * for item list
 */
const ItemList = (function () {

  const itemListElement = document.getElementById('item-list');

  document.getElementById('item-search').addEventListener('input', event => {
    const query = event.target.value.toLowerCase();
    for (const element of itemListElement.children) {
      if (element.children.item(1).innerHTML.toLowerCase().includes(query)) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  });

  function src(type, meta) {
    return `https://raw.githubusercontent.com/unnamed/guicraft/main/assets/1.8/${type}-${meta}.png`;
  }

  /**
   * Loads the minecraft items specified
   * by the given version, returns a void
   * promise
   * @param version The minecraft version
   * @returns {Promise<void>}
   */
  async function loadItems(version) {
    // item list fetch
    const response = await fetch(`https://raw.githubusercontent.com/unnamed/guicraft/main/assets/${version}/list.json`);
    const json = await response.json();

    json.forEach(item => {

      const key = (item.type << 4) + item.meta;
      //const keyStr = key.toString();

      const option = document.createElement('option');
      option.value = key;
      option.innerHTML = item.name;

      const itemElement = document.createElement('div');
      itemElement.classList.add('item-element');
      const img = document.createElement('img');
      img.setAttribute('data-src', src(item.type, item.meta));
      img.classList.add('lazyload');

      const label = document.createElement('p');
      label.innerText = item.name;
      label.classList.add('hidden');

      itemElement.appendChild(img);
      itemElement.setAttribute('draggable', 'true');

      itemElement.appendChild(label);

      itemElement.addEventListener('dragstart', () => {
        // TODO: this should use new Slot({...})
        ItemUI.dragging = {
          type: key,
          displayName: item.name,
          lore: []
        };
      });
      itemListElement.appendChild(itemElement);
    });
  }

  return {src, loadItems};

})();