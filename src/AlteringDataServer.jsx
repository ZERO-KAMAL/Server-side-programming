
import { useState, useEffect } from 'react'
import axios from 'axios'

const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState(
    'a new note...'
  ) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')  


  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }  

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
      .catch(error => {
        console.log('fail')
      })

  }

  const toggleImportanceOf = id => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios.put(url, changedNote).then(response => {
      setNotes(notes.map(note => note.id === id ? response.data : note))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}  
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>        
    </div>
  )
}
export default App