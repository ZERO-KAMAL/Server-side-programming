
import ExerciseOne from "./exerciseOne"


const Hello = ({props}) => {
  // console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} year old</p>
    </div>
  )
}

const App = () => {
  const students = [
    {
      name: "kamal",
      age: 20
    },
    {
      name: "kamal Khatri",
      age: 18
    },
  ]
  return (
    <>
      <div>
        <h1>Greetings</h1>
        {students.map((student, index) => (
          <Hello key={index} props={student} />
        ))}

        <ExerciseOne/>
      </div>
    </>
  )
}

export default App
