import { expect } from 'chai';

test('should be able to define new String with single quotes', () => {
    const myName = 'Slawek'
    expect(myName).to.eq('Slawek')
})

test('should be able to define new String with double quotes', () => {
    const name = "Marysia"
    // Asercja czyli sprawdzenie
    // Upewniamy się ze nasza stała o nazwie name faktycznie równa się Marysia
    expect(name).to.eq('Marysia')
})

test('should not be able to override const', () => {
    const name = "Marysia"
    expect(() => {
        name = 'Slawek'
    }).to.throw(TypeError);
})

test('should be able to override value', () => {
    let name = "Marysia"
    name = 'Slawek'
    expect(name).to.eq('Slawek')
    name = 'Jan'
    expect(name).to.eq('Jan')
})

test('should be able to concatenate string', () => {
    const name = 'Slawek'
    expect('Hello ' + name).to.eq('Hello Slawek')
    expect(`Hello ${name}`).to.eq('Hello Slawek')
})

test('should be able to verify that the constant is string', () => {
    const name = 'Slawek'
    expect(typeof name).to.eq('string')
})

