const personDAO = require("../dao/person-dao");

class PersonService {
  createPerson(personDto) {
    const {firstName, lastName, email} = personDto;
    return personDAO.createPerson(firstName, lastName, email);
  }

  readPerson() {
    return personDAO.readPerson();
  }
}

module.exports = new PersonService();
