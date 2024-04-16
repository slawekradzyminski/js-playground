import { expect } from 'chai';
import { faker } from '@faker-js/faker';

const person = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    age: 18,
    isAdult: true,
    children: {
        count: 2,
        names: [faker.person.firstName(), faker.person.firstName()]
    }
}

test('should return proper values', () => {
    expect(person.firstName).to.be.a('string').and.not.empty;
    expect(person.lastName).to.be.a('string').and.not.empty;
    expect(person.age).to.eq(18);
    expect(person.isAdult).to.eq(true);
    expect(person.children.count).to.eq(2);
    expect(person.children.names).to.be.an('array').with.lengthOf(2);
    person.children.names.forEach(name => {
        expect(name).to.be.a('string').and.not.empty;
    });
});

test('should modify keys in new object', () => {
    const newPerson = {
        ...person,
        firstName: 'Gosia',
        lastName: 'Radzyminska'
    }

    expect(newPerson.firstName).to.eq('Gosia');
    expect(newPerson.lastName).to.eq('Radzyminska');
    expect(newPerson.age).to.eq(18);
    expect(newPerson.isAdult).to.eq(true);
    expect(person.children.count).to.eq(2);
    expect(person.children.names).to.be.an('array').with.lengthOf(2);
    person.children.names.forEach(name => {
        expect(name).to.be.a('string').and.not.empty;
    });
    expect(newPerson.children.count).to.eq(2);
})

test('should add new key in new object', () => {
    const newPerson = {
        ...person,
        newKey: 'new'
    }

    expect(newPerson.firstName).to.be.a('string').and.not.empty;
    expect(newPerson.lastName).to.be.a('string').and.not.empty;
    expect(newPerson.age).to.eq(18);
    expect(newPerson.isAdult).to.eq(true);
    expect(person.children.count).to.eq(2);
    expect(person.children.names).to.be.an('array').with.lengthOf(2);
    person.children.names.forEach(name => {
        expect(name).to.be.a('string').and.not.empty;
    });
    expect(newPerson.newKey).to.eq('new');
})

test('deconstruct', () => {
    const { children, ...personWithoutChildren } = person;

    expect(personWithoutChildren.firstName).to.be.a('string').and.not.empty;
    expect(personWithoutChildren.lastName).to.be.a('string').and.not.empty;
    expect(personWithoutChildren.age).to.eq(18);
    expect(personWithoutChildren.isAdult).to.eq(true);
})
