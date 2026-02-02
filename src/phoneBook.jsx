import { useState } from 'react'

const Filter = ({ filter, handleFilterChange }) => (
    <div>
        Filter shown with:
        <input value={filter} onChange={handleFilterChange} />
    </div>
)

const PersonForm = ({
    onSubmit,
    newName,
    newNum,
    handleNameChange,
    handleNumChange
}) => (
    <form onSubmit={onSubmit}>
        <div>
            Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            Number: <input value={newNum} onChange={handleNumChange} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
)

const Persons = ({ persons }) => (
    <>
        {persons.map(person => (
            <div key={person.name}>
                {person.name} {person.number}
            </div>
        ))}
    </>
)

const PhoneBookComponent = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filter, setFilter] = useState('')

    const handleAddPerson = (event) => {
        event.preventDefault()

        // const nameExists = persons.some(
        //     person => person.name === newName
        // )

        // if (nameExists) {
        //     alert(`${newName} is already added to phonebook`)
        //     return
        // }

        setPersons(persons.concat({ name: newName, number: newNum }))
        setNewName('')
        setNewNum('')
    }

    const personsToShow = persons.filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
    )

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter
                filter={filter}
                handleFilterChange={(event) => setFilter(event.target.value)}
            />

            <h3>Add a new</h3>

            <PersonForm
                onSubmit={handleAddPerson}
                newName={newName}
                newNum={newNum}
                handleNameChange={(event) => setNewName(event.target.value)}
                handleNumChange={(event) => setNewNum(event.target.value)}
            />

            <h3>Numbers</h3>

            <Persons persons={personsToShow} />
        </div>
    )
}

export default PhoneBookComponent
