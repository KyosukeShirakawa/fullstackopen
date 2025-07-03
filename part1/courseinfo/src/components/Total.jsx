function Total({parts}) {console.log(parts)
  const total = parts.reduce((sum, p) =>  sum +p.exercises, 0)
  return (
      <p>
        Number of exercises {total}
      </p>
)

}

export default Total
