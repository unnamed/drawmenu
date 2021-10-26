/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing the 'Slot' component, based on Minecraft's
 * Slot (https://wiki.vg/Slot_Data)
 */

/**
 * Represents a Minecraft Slot
 * @property {number} id Item identifier, integer
 * @property {number} count Item count, integer
 * @property {object} nbt Extra information
 */
class Slot {

    /**
     * Creates a new slot object (inventory item)
     * @param {object} data
     * @param {number} [data.id] Item identifier, integer
     * @param {number | undefined} [data.count] Item count, integer
     * @param {object | undefined} [data.nbt] Optional extra
     * information
     */
    constructor(data) {
        this.id = data.id;
        this.count = data.count === undefined ? 1 : data.count;
        this.nbt = data.nbt === undefined ? {} : data.nbt;
    }

    /**
     * Gets the property present in the 'display' tag
     * in the 'nbt' property. (display[name])
     * @param {string} name The property name
     * @return {any | undefined} The property value
     * @private
     */
    _getDisplayProperty(name) {
        // return this.nbt.display?[name]
        const display = this.nbt['display'];
        if (display === undefined) return undefined;
        return display[name];
    }

    /**
     * Sets the property at the 'display' tag inside
     * the 'nbt' property
     * @param {string} name The property name
     * @param {any | undefined} value The property value
     * @private
     */
    _setDisplayProperty(name, value) {
        // delete property if value is undefined
        const del = value === undefined;
        let display = this.nbt.display;
        if (display === undefined) {
            if (del) return;
            this.nbt.display = display = {};
        }
        display[name] = value;
    }

    /**
     * Gets the item display name at 'display.Name'
     * @return {string | undefined} The display name
     */
    get displayName() {
        return this._getDisplayProperty('Name');
    }

    /**
     * Sets the item display name at 'display.Name'
     * @param {string | undefined} value The new display
     * name, or 'undefined' to delete
     */
    set displayName(value) {
        this._setDisplayProperty('Name', value);
    }

    /**
     * Gets the item lore at 'display.Lore'
     * @return {string[] | undefined} The item lore
     */
    get lore() {
        return this._getDisplayProperty('Lore');
    }

    /**
     * Sets the item lore at 'display.Lore'
     * @param {string[] | undefined} value The new item
     * lore, or 'undefined' to delete
     */
    set lore(value) {
        this._setDisplayProperty('Lore', value);
    }

}