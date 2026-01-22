
import ExerciseOne from "./exerciseOne"
import ShowMap from "./ShowMap";
import StudentMap from "./StudentMap";

import './main.css'
import Header from "./Header";

import UseStateLearnComponent from "./useStateLearn";
import RenderingCollection from "./renderingCollection";



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
    {
      name: "kamal Khatri",
      age: 25
    },
    {
      name: "kamal Khatri",
      age: 30
    },
  ]

  // List of places
  const places = [
    { name: "Helsinki", lat: 60.1699, lng: 24.9384 },
    { name: "Tampere", lat: 61.4978, lng: 23.76095 },
    { name: "Turku", lat: 60.4518, lng: 22.2666 },

    { name: "Lahti", lat: 60.9827, lng: 25.6615 },
    { name: "Oulu", lat: 65.0121, lng: 25.4651 },
    { name: "Jyväskylä", lat: 62.2426, lng: 25.7473 },
    { name: "Kuopio", lat: 62.8924, lng: 27.6770 },
  ];

  const t = [1, 3, 5, 6, 7, 2, 3]

  t.push(10)

  t.forEach((value) => {
    // console.log(value)
  })

  const courseTitle = "Kamal React Course"

  // Object Methods and "this"
  const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PHD',
    greet: function () {
      console.log('hello, my name is ' + this.name)
    }
  }
  arto.greet()


  arto.growOlder = function () {
    this.age += 1
  }

  console.log(arto.age)
  arto.growOlder()
  console.log(arto.age)

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  
  return (
    <>
      <div>

        <Header course={courseTitle} />

        <UseStateLearnComponent />

        {/* <ExerciseOne /> */}

        {/* <StudentMap students={students} /> */}

        {/* <ShowMap places={places} /> */}

        {
          parts.map(part => (
            <RenderingCollection key={part.id} part={part} />
          )
          )
        }

      </div>
    </>
  )
}

export default App
