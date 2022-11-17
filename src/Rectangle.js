export const errorMessage = 'multiplicator must be positive'

export class Rectangle {

    #width
    #height

    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    getArea = () => this.#width * this.#height

    getTwoTimesBiggerRectangle = () => new Rectangle(this.#width * 2, this.#height * 2)

    getNTimesBiggerRectangle = (multiplicator) => {
        if (multiplicator <= 0) {
            throw new Error(errorMessage)
        }
        return new Rectangle(this.#width * multiplicator, this.#height * multiplicator)
    }

    isSquare = () => this.#height === this.#width

}