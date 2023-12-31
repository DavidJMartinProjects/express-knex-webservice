const db = require("../db/db");

class PersonDAO {
    async createPerson(firstName, lastName, email) {
        const [id] = await db("person").insert({
            email,
            first_name: firstName,
            last_name: lastName
        })
        .returning('id');

        return id;
    }

    async readPerson() {
        const response = await db("person").select();

        return response;
    }
}

module.exports = new PersonDAO();