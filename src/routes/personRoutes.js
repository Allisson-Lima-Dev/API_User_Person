const router = require('express').Router()

const Person = require('../models/Person')

//Create DATA
router.post('/', async (req, res) => {

    const { name, salary, approved } = req.body

    const person = {
        name,
        salary,
        approved
    }
    if (!name) {
        res.status(422).json({ error: 'nome é obrigatório!' })
    }
    try {
        //Criando os dados no DB
        await Person.create(person)

        res.status(201).json({ message: 'Create success!' })

    } catch (error) {
        res.status(500).json({ errot: error })
    }
})

//Read - leitura
router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

router.get('/:id', async (req, res) => {
    //extrair o dado da requisição

    const id = req.params.id

    try {
        const person = await Person.findOne({ _id: id })
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({ error: 'Usuario não encontrado'})
    }
})

module.exports = router