const PersonForm = (props) => {

  return (
      <form onSubmit={props.onSubmit}>
        <div>
          name: <input onChange={props.onChangeName} value={props.valueName}/>
        </div>
        <div>
          number: <input onChange={props.onChangeNumber} value={props.valueNumber}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
  )
}

export default PersonForm