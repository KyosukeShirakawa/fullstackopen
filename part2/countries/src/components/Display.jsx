import Country from "./Country"

const Display = ({countries}) => {
  if(countries.length >10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (countries.length === 1) {
    return (
      <Country country={countries[0]}/>
    )
  }
  
  return (
      <ul>
        {countries.map((country, index) => <li key={index}>{country.name.common} <button>Show</button></li>)}
      </ul>
  )
}

export default Display