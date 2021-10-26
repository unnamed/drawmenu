/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing user interface handling for item and
 * tooltip components
 */
const ItemUI = (function () {

    /**
     *
     * @type {object}
     * @property {Slot | undefined} pin The item where this
     * tooltip is attached (pinned)
     */
    const Tooltip = (function () {

        const container = document.getElementById("item-tooltip");
        const displayName = document.getElementById("display-name-display");
        const lore = document.getElementById("lore-display");

        return {
            pinElement: undefined,
            pin: undefined,
            setPin(element, item) {
                this.pinElement = element;
                this.pin = item;
                this.set(element, item);
            },
            set(element, item) {
                formatter.formatInto(displayName, item.displayName || "");
                formatter.formatInto(lore, (item.lore || []).join('<br>'));

                container.remove();
                container.classList.remove("hidden");
                element.appendChild(container);
            },
            unsetPin() {
                this.pin = undefined;
                this.pinElement = undefined;
                this.unset();
            },
            unset() {
                if (this.pin === undefined) {
                    // if no pin, hide tooltip
                    container.remove();
                } else {
                    // if pin, move to pin
                    this.set(this.pinElement, this.pin);
                }
            }
        };
    })();

    /**
     * The current item being dragged
     * @type {Slot | undefined}
     */
    let drag = undefined;

    /**
     * @param {Slot | undefined} item
     * @param {Row} row
     * @param {number} slot
     * @return {HTMLElement}
     */
    function createElement(item, row, slot) {
        const element = document.createElement("div");

        element.addEventListener("dragover", event => event.preventDefault());
        element.addEventListener("drop", event => {
            event.preventDefault();
            if (drag === undefined) {
                return;
            }

            if (drag === Tooltip.pin) {
                // moved the item with tooltip
                // todo: move tooltip
            }

            row.set(slot, drag);
            drag = undefined;
            InventoryUI.draw();
        });

        if (item) {
            element.addEventListener("click", () => {
                if (Tooltip.pin === item) {
                    // if this slot is pinned, unpin
                    Tooltip.unsetPin();
                } else {
                    // if this slot is not pinned, pin
                    Tooltip.setPin(element, item);
                }
            });

            const img = document.createElement("img");

            img.setAttribute("draggable", "true");
            img.addEventListener("dragstart", () => {
                drag = item;
                // remove item
                row.set(slot, undefined);
                // InventoryUI.draw();
            });
            img.addEventListener("mouseenter", () => Tooltip.set(element, item));
            img.addEventListener("mouseleave", () => Tooltip.unset());
            img.src = ItemList.src(item.type >> 4, item.type & 15);

            element.appendChild(img);
        }

        return element;
    }

    return {
        Tooltip,
        createElement,
        get dragging() {
            return drag;
        },
        set dragging(value) {
            drag = value;
        }
    };
})();