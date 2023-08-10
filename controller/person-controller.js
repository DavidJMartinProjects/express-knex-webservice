const personService = require("../service/person-service");

class PersonController {
  async createPerson(req, res) {
    try {
      const id = await personService.createPerson(req.body);
      res.status(201).json(id);
    } catch (err) {
      res.status(500).json(err.detail);
    }
  }

  async readPerson(req, res) {
    try {
      const response = await personService.readPerson();
      res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err.detail);
    }
  }
}

module.exports = new PersonController();
