import { expect } from 'chai';

test('should create new object with proper field values', () => {
    const object = {
        "username": "admin",
        "roles": [
          "ROLE_ADMIN",
          "ROLE_CLIENT"
        ],
        "firstName": "Slawomir",
        "lastName": "Radzyminski",
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfQ0xJRU5UIn1dLCJpYXQiOjE2ODQzOTg3NjAsImV4cCI6MTY4NDM5OTA2MH0.QNpk3CRklBQweMejHAdY-w7mFkWMPuAbJOI6Je2hgJg",
        "email": "admin@email.com"
      }

      console.log(JSON.stringify(object))
})
