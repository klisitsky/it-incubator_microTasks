import React from 'react';
import './App.css';
import {Map} from "./01.Map/Map";
import {Btns} from "./02.Button/Btns";
import {UseState} from "./03.UseState/UseState";

const students = [
  {id: 1, name: "James", age: 8},
  {id: 2, name: "Robert", age: 18},
  {id: 3, name: "John",  age: 28},
  {id: 4, name: "Michael", age: 38},
  {id: 5, name: "William", age: 48},
  {id: 6, name: "David", age: 58},
  {id: 7, name: "Richard", age: 68},
  {id: 8, name: "Joseph", age: 78},
  {id: 9, name: "Thomas", age: 88},
  {id: 10, name: "Charles", age: 98},
  {id: 11, name: "Christopher", age: 100},
]

function App() {
  return (
    <div>
      <Map students={students}/>
      <Btns/>
      <UseState/>
    </div>);
}

export default App;
