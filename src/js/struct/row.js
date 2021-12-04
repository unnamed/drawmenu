/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing the 'Row' component, a compound of
 * other 'Slot' components
 */

/**
 * Represents a Minecraft inventory row, a compound
 * of {@link Slot}
 */
class Row {

  static MAX_LENGTH = 9;

  /**
   * Creates a new row object, an inventory row
   * @param {Slot[]} data The items in this row
   */
  constructor(data) {
    this._data = [...data];
  }

  /**
   * Gets the row length, integer
   * @returns {number} length
   */
  get length() {
    return this._data.length;
  }

  /**
   * Gets the {@link Slot} at the
   * specified index
   * @param {number} index
   * @returns {Slot | undefined}
   */
  get(index) {
    return this._data[index];
  }

  /**
   * Sets the {@link Slot} at the
   * specified index
   * @param {number} index The slot index
   * @param {Slot | undefined} slot The
   * new slot, or undefined to delete
   */
  set(index, slot) {
    this._data[index] = slot;
  }
}