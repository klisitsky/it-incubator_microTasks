import React from 'react';

type NewComponentType = {
  students: Array<StudentType>
}

type StudentType = {
  id: number
  name: string
  age: number
}


export const Map = (props: NewComponentType) => {
  return (

    <div><span className="lessonTitle">Lesson 1 - Map</span>
      <ul>
        {props.students.map((studentObj) => {
          return (<li key={studentObj.id}>
            <span>Name: {studentObj.name} - </span>
            <span>Age: {studentObj.age}</span>
          </li>)

        })}
      </ul>
      <hr/>
    </div>)
}