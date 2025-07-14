import { useState, useEffect } from 'react'
import countryServices from './services/countryServices'
import Display from './components/Display'

function App() {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    countryServices
      .getAll()
      .then(data => setCountries(data))

  }, [])

  const handleFilter = (e) => {
    setNewFilter(e.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toUpperCase().includes(newFilter.toUpperCase()))
    
  return (
    <div>
      find countries <input onChange={handleFilter} type="text" />
      <Display countries={countriesToShow}/>
    </div>
  )


}

export default App
