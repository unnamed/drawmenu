/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing the 'Inventory' component, a compound
 * of 'Row' components
 */

/**
 * @property {string} title
 */
class Inventory {

    static MAX_ROWS = 6;

    /**
     *
     * @param {Row[]} rows
     */
    constructor(rows) {
        this.title = "Hello World";
        this._rows = rows;
    }

    add(row) {
        this._rows.push(row);
    }

    /**
     *
     * @param {number} index
     * @returns {Row}
     */
    get(index) {
        return this._rows[index];
    }

    delete(index) {
        this._rows.splice(index, 1);
    }

    /**
     *
     * @param {number} rowIndex
     * @param {number} slotIndex
     * @returns {Slot | undefined}
     */
    item(rowIndex, slotIndex) {
        const row = this._rows[rowIndex];
        return row === undefined
            ? undefined
            : row.get(slotIndex);
    }

    get length() {
        return this._rows.length;
    }

}