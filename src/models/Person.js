const mongoose = require('../db/db')


const PersonData = new mongoose.Schema({
    name: String,
    salary: Number,
    approved: Boolean,
})

const Person = mongoose.model('Person', PersonData)

module.exports = Person