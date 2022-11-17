import { expect } from 'chai';

const person = {
    firstName: 'Slawek',
    lastName: 'Radzyminski',
    age: 18,
    isAdult: true,
    children: {
        count: 2,
        names: ['Piotr', 'Zofia']
    }
}

test('should return proper values', () => {
    expect(person.firstName).to.eq('Slawek')
    expect(person.lastName).to.eq('Radzyminski')
    expect(person.age).to.eq(18)
    expect(person.isAdult).to.eq(true)
    expect(person.children).to.deep.eq({
        names: ['Piotr', 'Zofia'],
        count: 2
    })
    expect(person.children.count).to.eq(2)
});

test('should modify keys in new object', () => {
    const newPerson = {
        ...person,
        firstName: 'Gosia',
        lastName: 'Radzyminska'
    }

    expect(newPerson.firstName).to.eq('Gosia')
    expect(newPerson.lastName).to.eq('Radzyminska')
    expect(newPerson.age).to.eq(18)
    expect(newPerson.isAdult).to.eq(true)
    expect(newPerson.children).to.deep.eq({
        names: ['Piotr', 'Zofia'],
        count: 2
    })
    expect(newPerson.children.count).to.eq(2)
})

test('should add new key in new object', () => {
    const newPerson = {
        ...person,
        newKey: 'new'
    }

    expect(newPerson.firstName).to.eq('Slawek')
    expect(newPerson.lastName).to.eq('Radzyminski')
    expect(newPerson.age).to.eq(18)
    expect(newPerson.isAdult).to.eq(true)
    expect(newPerson.children).to.deep.eq({
        names: ['Piotr', 'Zofia'],
        count: 2
    })
    expect(newPerson.children.count).to.eq(2)
    expect(newPerson.newKey).to.eq('new')
})

test('deconstruct', () => {
    const { children, ...personWithoutChildren } = person;

    expect(personWithoutChildren).to.deep.equal({
        firstName: 'Slawek',
        lastName: 'Radzyminski',
        age: 18,
        isAdult: true
    })
})
