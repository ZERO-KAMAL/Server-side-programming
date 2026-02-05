// App.js  (FULL working code for exercises 2.12–2.15 in ONE file)
// NOTE: This includes the "service module" inside the same file to match your request.
// In your real project, move personService into: src/services/persons.js

import { useEffect, useState } from 'react'
import axios from 'axios'

// ---------- "AXIOS SERVICE" (normally in src/services/persons.js) ----------
const personService = (() => {
    const baseUrl = 'http://localhost:3001/persons'

    const getAll = () => axios.get(baseUrl).then(res => res.data)

    const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)

    const update = (id, updatedPerson) =>
        axios.put(`${baseUrl}/${id}`, updatedPerson).then(res => res.data)

    const remove = (id) => axios.delete(`${baseUrl}/${id}`)

    return { getAll, create, update, remove }
})()

// ------------------------------- APP -------------------------------
const Task212 = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    // 2.12: fetch from backend
    useEffect(() => {
        personService.getAll().then(data => {
            setPersons(data)
        })
    }, [])

    // 2.12 + 2.15: create OR update existing (PUT)
    const addPerson = (event) => {
        event.preventDefault()

        const name = newName.trim()
        const number = newNumber.trim()
        if (!name || !number) return

        const existing = persons.find(
            p => p.name.toLowerCase() === name.toLowerCase()
        )

        // 2.15: if exists -> confirm + replace number using PUT
        if (existing) {
            const ok = window.confirm(
                `${existing.name} is already added to phonebook, replace the old number with a new one?`
            )
            if (!ok) return

            const changedPerson = { ...existing, number }

            personService
                .update(existing.id, changedPerson)
                .then(updated => {
                    setPersons(persons.map(p => (p.id === existing.id ? updated : p)))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(() => {
                    alert(`${existing.name} was already removed from server`)
                    setPersons(persons.filter(p => p.id !== existing.id))
                })

            return
        }

        // 2.12: otherwise create new (POST)
        const personObject = { name, number }

        personService
            .create(personObject)
            .then(created => {
                setPersons(persons.concat(created))
                setNewName('')
                setNewNumber('')
            })
    }

    // 2.14: delete with confirmation (DELETE)
    const handleDelete = (id, name) => {
        const ok = window.confirm(`Delete ${name}?`)
        if (!ok) return

        personService
            .remove(id)
            .then(() => {
                setPersons(persons.filter(p => p.id !== id))
            })
            .catch(() => {
                alert(`${name} was already removed from server`)
                setPersons(persons.filter(p => p.id !== id))
            })
    }

    const personsToShow = persons.filter(p =>
        p.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div style={{ padding: 16 }}>
            <h2>Phonebook</h2>

            <div>
                filter shown with{' '}
                <input
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>

            <h3>Add a new</h3>

            <form onSubmit={addPerson}>
                <div>
                    name:{' '}
                    <input
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                    />
                </div>
                <div>
                    number:{' '}
                    <input
                        value={newNumber}
                        onChange={(e) => setNewNumber(e.target.value)}
                    />
                </div>
                <button type="submit">add</button>
            </form>

            <h3>Numbers</h3>

            <ul>
                {personsToShow.map(person => (
                    <li key={person.id}>
                        {person.name} {person.number}{' '}
                        <button onClick={() => handleDelete(person.id, person.name)}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Task212
