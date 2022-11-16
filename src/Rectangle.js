export default class Rectangle {
    #height
    #width

    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }

    getWidth = () => this.#width
}