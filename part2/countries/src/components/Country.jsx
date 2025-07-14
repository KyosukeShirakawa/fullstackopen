
const Country = ({country}) => {
  console.log(country.languages)

  const flagStyle = {
    fontSize: "10rem"
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>{`Capital ${country.capital}`}</p>
      <p>{`Area ${country.area}`}</p>

      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((value) => <li>{value}</li>)}
      </ul>
      <div style={flagStyle}>{country.flag}</div>
    </div>
  )
}


export default Country