import React from 'react'
import Person from './Person'

const Persons = ({ persons, handleDeletePerson }) => {

  return (  
    <div>
      <table>
        { persons.map(person => <Person key={person.id} id={person.id} person={person.name} phone={person.phone} handleDeletePerson={handleDeletePerson}/> )}
      </table>
    </div>
          )

}

export default Persons