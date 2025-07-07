function Total({course}) {
  const total = course.parts.reduce((sum, p) =>  sum +p.exercises, 0)
  return (
      <p>
        Number of exercises {total}
      </p>
)

}

export default Total
