
import ExerciseOne from "./exerciseOne"
import ShowMap from "./ShowMap";
import StudentMap from "./StudentMap";

import './main.css'
import Header from "./Header";

import UseStateLearnComponent from "./useStateLearn";
import CourseComponent from "./Course";
import PhoneBookComponent from "./phoneBook";
import FetchingDataComponent from "./fetchingdata"



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
  // const arto = {
  //   name: 'Arto Hellas',
  //   age: 35,
  //   education: 'PHD',
  //   greet: function () {
  //     console.log('hello, my name is ' + this.name)
  //   }
  // }
  // arto.greet()


  // arto.growOlder = function () {
  //   this.age += 1
  // }

  // console.log(arto.age)
  // arto.growOlder()
  // console.log(arto.age)

  // const parts = [
  //   {
  //     id:1,
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]



  const partss = [10, 20, 30];

  const totalValue = partss.reduce((s, p) => {
    console.log('what is happening', s, p);
    return s + p;
  }, 0);

  console.log(totalValue)


  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { name: 'Fundamentals of React', exercises: 10, id: 1 },
        { name: 'Using props to pass data', exercises: 7, id: 2 },
        { name: 'State of a component', exercises: 14, id: 3 },
        { name: 'Redux', exercises: 11, id: 4 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { name: 'Routing', exercises: 3, id: 1 },
        { name: 'Middlewares', exercises: 7, id: 2 }
      ]
    }
  ]

  return (
    <>
      <div>

        {/* <Header course={courseTitle} /> */}

        {/* <UseStateLearnComponent /> */}

        {/* <ExerciseOne /> */}

        {/* <StudentMap students={students} /> */}

        {/* <ShowMap places={places} /> */}

        {/* {courses.map(course => (
          <CourseComponent key={course.id} course={course} />
        ))} */}

        <PhoneBookComponent />

        <FetchingDataComponent />
        
      </div>
    </>
  )
}

export default App
