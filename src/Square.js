class Square {
    constructor(side) {
        if (!side || side <= 0 || isNaN(side)) {
            throw new Error('Side must be a positive number')
        }
        this.side = side
    }

    area = () => {
        return Math.pow(this.side, 2)
    }

    perimeter = () => {
        return 4 * this.side
    }
}

export default Square