/*!
 * This file is part of Guicraft under the MIT License
 *
 * File containing the Codec abstraction
 */

/**
 * Responsible for encoding and decoding project
 * information from/to strings
 *
 * @property {function(Project): string} encode
 * @property {function(string): Project} decode
 */
class Codec {

    /**
     * Creates a new codec implementation
     * @param {object} data
     * @param {function(Project): string} [data.encode]
     * @param {function(string): Project} [data.decode]
     */
    constructor(data) {
        this.encode = data.encode;
        this.decode = data.decode;
    }

}

/**
 * Codec to be used in next project import/export
 * operations
 * @type {Codec}
 */
Codec.current = new Codec({
    encode: project => JSON.stringify(project),
    decode: string => JSON.parse(string)
});