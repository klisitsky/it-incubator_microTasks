import React from 'react';
import './App.css';
import {Map} from "./01.Map/Map";
import {Btns} from "./02.Button/Btns";
import {UseState} from "./03.UseState/UseState";
import {FilterMoney} from "./04.Filter/FilterMoney";

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

const money = [
  {banknote: "dollar", nominal: 100, number: "a123456789"},
  {banknote: "dollar", nominal: 50, number: "b123456789"},
  {banknote: "ruble", nominal: 100, number: "c123456789"},
  {banknote: "dollar", nominal: 100, number: "d123456789"},
  {banknote: "dollar", nominal: 50, number: "e123456789"},
  {banknote: "ruble", nominal: 100, number: "f123456789"},
  {banknote: "dollar", nominal: 50, number: "j123456789"},
  {banknote: "ruble", nominal: 50, number: "h123456789"}
]

function App() {
  return (
    <div>
      <Map students={students}/>
      <Btns/>
      <UseState/>
      <FilterMoney money={money}/>
    </div>);
}

export default App;
