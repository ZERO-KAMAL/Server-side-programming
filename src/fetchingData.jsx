import axios from 'axios'
import { useState, useEffect } from 'react'


const FetchingDataComponent = () => {

    const [notes, setNotes] = useState([])


    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log(response.data)
                setNotes(response.data)
            })
    }, [])

    return (
        <>

            <ul className='listStyle'>
                {notes.map((note, i) => (
                    <li key={i} >
                        <p>{note.id}</p>
                        <p>{note.content}</p>
                        <p>{note.important}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}



export default FetchingDataComponent