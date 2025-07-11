import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personServices from './services/personServices'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(data => setPersons(data))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    const found = persons.find(person => person.name == newName)
    if(found) {
      if(confirm(`${newName} is already added, replace the old number with a new one?`)) {
        updateNumber(found.id, newPerson)
        setNewName('')
        setNewNumber('')
      }
      return;
    }


    personServices
      .create(newPerson)
      .then(data => {
        setPersons(persons.concat(data))
        setNewName('')
        setNewNumber('')
      })
  }
  const updateNumber = (id, newPerson) => {
    personServices
      .update(id, newPerson)
      .then(data => {
        setPersons(persons.map(person => person.id ===id ? data : person))
      })

  }
  const handleDelete = (id) => {
    const person = persons.find(person => person.id === id)
    if(confirm(`do you really wanna delete ${person.name}`)) {
      personServices
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id != id))
        })
    }
  }
  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }
  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }
  const handleChangeFilter = (id) => {
    setNewFilter(id)
  }

  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(newFilter.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleChangeFilter} value={newFilter} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={handleSubmit} valueName={newName} valueNumber={newNumber} onChangeName={handleChangeName} onChangeNumber={handleChangeNumber}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App