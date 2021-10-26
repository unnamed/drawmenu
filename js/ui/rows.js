/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing user interface handling for rows
 * (the row list)
 */
const RowUI = (function () {

    function addRow() {
        const inventory = Project.current.inventory;
        if (inventory.length >= Inventory.MAX_ROWS) {
            DialogUI.show(
                "Cannot add more rows",
                `The rows limit is ${Inventory.MAX_ROWS}`
            );
            return;
        }
        inventory.add(new Row([]));
        draw();
    }

    function clearRows() {
        const inventory = Project.current.inventory;

    }

    return {
        addRow,
        clearRows
    };
})();