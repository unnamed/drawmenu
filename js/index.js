/*! Unnamed Team's Guicraft v0.1.0 | MIT License | github.com/unnamed/guicraft */
(function() {

    /**
     * Updates the selection sidebar for editing the
     * item in the selected slot
     * @param {number} row The row (0-MAX_ROWS)
     * @param {number} slot The row slot (0-ROW_SIZE)
     * @param {Object|undefined} item The current item in this slot
     */
    function setSelection(row, slot, item) {

        /* Enable all item controls */
        for (const controlName in itemControls) {
            const control = itemControls[controlName];
            control.disabled = false;
        }

        if (item) {
            /* Set values to controls */
            for (const controlName in itemControls) {
                const control = itemControls[controlName];
                control.value = asString(item[controlName]);
            }
        } else {
            /* Reset all controls */
            for (const controlName in itemControls) {
                const control = itemControls[controlName];
                control.value = "";
            }
        }
    }

    /*for (const controlName in itemControls) {
        const control = itemControls[controlName];
        if (control instanceof HTMLSelectElement) {
            control.addEventListener("change", event => {
                if (!itemTooltip.pinLocation) {
                    return;
                }

                const { row, slot } = itemTooltip.pinLocation;
                const item = getItem(row, slot);
                item[controlName] = parseInt(event.target.value);
                draw();
            });
        } else if (control instanceof HTMLInputElement
            || control instanceof HTMLTextAreaElement) {
            control.addEventListener("input", event => {

                if (itemTooltip.location
                    && itemTooltip.pinLocation
                    && itemTooltip.location.equals(itemTooltip.pinLocation)) {
                    formatter.formatInto(itemTooltip[controlName], event.target.value);
                }

                if (itemTooltip.pinLocation) {
                    const { row, slot } = itemTooltip.pinLocation;
                    const item = getItem(row, slot);
                    item[controlName] = event.target.value;
                }
            });
        }
    }*/

    window.addEventListener("beforeunload", event => {
        return event.returnValue = "Are you sure you want to leave the page? Some changes may not be saved";
    });

})();