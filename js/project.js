/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing project information and functions to
 * handle it like importing, exporting, etc.
 */

/**
 * @property {Inventory} inventory
 * @property {string} minecraftVersion
 */
class Project {

    /**
     * @param data
     * @param {Inventory} [data.inventory]
     */
    constructor(data) {
        this.inventory = data.inventory;
        this.minecraftVersion = "1.8";
    }

    export() {
        const element = document.createElement("a");
        element.setAttribute("href", 'data:text/json;charset=utf-8,'
            + encodeURIComponent(Codec.current.encode(this)));
        element.setAttribute("download", "menu.gcproject");
        document.body.appendChild(element);
        element.click();
        element.remove();
    }

    /**
     * Imports a project from the given source
     * string
     * @param {string} source
     * @return {Project}
     */
    static importFromString(source) {
        try {
            return Codec.current.decode(source);
        } catch (e) {
            // todo: show a dialog instead
            throw e;
        }
    }

    /**
     * Asks the user to select a file to be imported
     * as a Guicraft project, tries to execute all
     * codecs until one works
     * @param {function(Project)} callback
     */
    static import(callback) {
        const input = document.createElement("input");
        input.type = "file";
        input.addEventListener("change", event => {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.readAsText(file, "UTF-8");
            reader.addEventListener("load", readEvent =>
                callback(this.importFromString(readEvent.target.result)));
        });
        document.body.appendChild(input);
        input.click();
        input.remove();
    }

}

Project.current = new Project({
    // initialize empty project
    inventory: new Inventory([
        new Row([])
    ])
});