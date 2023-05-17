import { expect } from 'chai';

test('should be able to define boolean', () => {
    const bool = true
    expect(typeof bool).to.eq('boolean')
    expect(bool).to.eq(true)
})

test('should be able to define logical operators', () => {
    // Zaprzeczenie
    const bool = !true
    expect(bool).to.eq(false)

    // Logiczne i
    const bool2 = true && false
    expect(bool2).to.eq(false)

    // Logiczne lub
    const bool3 = true || false
    expect(bool3).to.eq(true)
})

test('should be able to buy a beer', () => {
    let canBuyABeer = false
    const age = 20
    const money = 10

    if (age >= 18 && money >= 3) {
        canBuyABeer = true
    } else {
        console.log("You can't buy a beer. I'm sorry!")
    }

    expect(canBuyABeer).to.eq(true)
})

test('should be able to verify that left side equals the right side', () => {
    const a = 10
    const b = 10

    expect(a === b).to.eq(true)
})

test('should be able to verify that left side not equals the right side', () => {
    const a = 10
    const b = "10"

    expect(a !== b).to.eq(true)
})

