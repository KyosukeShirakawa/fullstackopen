import Part from "./Part"

function Content({parts}) {
  return (
    <div>
      {parts.map(p => <Part key={p.id} part={p} />)}
    </div>
)

}

export default Content
