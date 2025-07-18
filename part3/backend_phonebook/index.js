const express = require('express')
const app = express()
const morgan = require('morgan')

morgan.token('type', function (req, res) { return JSON.stringify(req.body)})

app.use(express.static('dist'))
app.use(express.json())
app.use(morgan(":method :url :status :type"))
let persons =  [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
  response.send(`<p>Phonebook has info for ${persons.length} people<br>${new Date(Date.now())}</p>`)
})

app.get('/api/persons', (request, response) => {
  response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id
  const person = persons.find(p=>p.id === id)
  if(person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id
  persons = persons.filter(person => person.id !== id)
  response.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(person => Number(person.id))) : 0
  return String(maxId+1)
}

app.post('/api/persons/', (request, response) => {
  const body = request.body

  if(!body.name || !body.number) {
    return response.status(404).json({
      error: 'name or number missing'
    })
  } else if (!persons.every(person => person.name !== body.name)) {
      return response.status(404).json({
      error: 'name must be unique'
    })
  }

  const person = {
    id: generateId(),
    name: body.name,
    number: body.number
  }
  persons = persons.concat(person)
  response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log('%cHello part3/backend_phonebook/index.js:19 ', 'background: green; color: white; display: block;');
})