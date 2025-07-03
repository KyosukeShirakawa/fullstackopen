import Part from "./Part"

function Content({course}) {
  return (
    <div>
      {course.parts.map(p => <Part key={p.id} part={p} />)}
    </div>
)

}

export default Content
