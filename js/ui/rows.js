/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing user interface handling for rows
 * (the row list)
 */
const RowUI = (function () {

    const container = document.getElementById("container__rows");
    let elements = [];

    /**
     *
     * @param {number} index
     * @return {HTMLElement}
     */
    function createElement(index) {
        const element = document.createElement("div");
        const span = document.createElement("span");
        const deleteButton = document.createElement("button");

        element.classList.add("output__row", "flex", "space-between");
        span.innerText = `Row #${index + 1}`;
        deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;

        deleteButton.addEventListener("click", () => {
            Project.current.inventory.delete(index);
            InventoryUI.draw();
            element.remove();
            elements.splice(index, elements.length).forEach(element => element.remove());

            for (let i = index; i < Project.current.inventory.length; i++) {
                // re-draw next
                container.appendChild(createElement(i));
            }
        });

        element.appendChild(span);
        element.appendChild(deleteButton);
        elements.push(element);

        return element;
    }

    function addRow() {
        const inventory = Project.current.inventory;
        if (inventory.length >= Inventory.MAX_ROWS) {
            DialogUI.show(
                "Cannot add more rows",
                `The rows limit is ${Inventory.MAX_ROWS}`
            );
            return;
        }
        const index = inventory.length;
        inventory.add(new Row([]));

        // draw in our container
        container.appendChild(createElement(index));

        // draw in inventory
        InventoryUI.draw();
    }

    function clearRows() {
        const inventory = Project.current.inventory;

    }

    return {
        addRow,
        clearRows
    };
})();