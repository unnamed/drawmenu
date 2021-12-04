/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing user interface handling for the
 * inventory element
 */
const InventoryUI = (function () {

  const e = id => document.getElementById(id);

  const title = {input: e('input__title'), output: e('output__title')};

  // title linking
  title.input.addEventListener('input', event => {
    const value = event.target.value;
    formatter.formatInto(title.output, value);
    Inventory.current.title = value;
  });

  let tableBody = e('table-body');

  /**
   * Draws the menu to the HTML
   */
  function draw() {

    // update title
    title.input.value = Inventory.current.title;
    formatter.formatInto(title.output, title.input.value);

    const newBody = document.createElement('tbody');

    // then write the new rows
    for (let row = 0; row < Inventory.current.length; row++) {
      const rowData = Inventory.current.get(row);
      const tableRow = newBody.insertRow();

      for (let slot = 0; slot < Row.MAX_LENGTH; slot++) {
        const item = rowData.get(slot);

        const realCell = tableRow.insertCell();
        const cell = ItemUI.createElement(item, rowData, row, slot);

        cell.classList.add('cell-content');
        realCell.appendChild(cell);
      }
    }

    replace(tableBody, newBody);
    tableBody = newBody;
  }

  return {draw};
})();