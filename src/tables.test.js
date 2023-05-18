import { expect } from 'chai';

test('should join table to string', () => {
    const roles = [ 'ROLE_ADMIN', 'ROLE_CLIENT' ]
    expect(roles.join()).to.eq('ROLE_ADMIN,ROLE_CLIENT')
})

test('should join table to string with separator', () => {
    const roles = [ 'ROLE_ADMIN', 'ROLE_CLIENT' ]
    expect(roles.join(', ')).to.eq('ROLE_ADMIN, ROLE_CLIENT')
})
