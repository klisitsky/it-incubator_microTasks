import React, {useState} from "react";


// useState не может быть в цикле, не может меняться их порядок, убавляться или увеличиваться их кол-во в рамках одной компоненты
//
export const UseState = () => {
  let [counter, setCounter] = useState(0)

  const plusOne = () => {
    setCounter((actual)=> actual + 1);
  }
  const equalToZero = () => {
    setCounter(0);
  }

  return (
    <div><span className="lessonTitle">Lesson 3 - useState</span>

      <h2>{counter}</h2>
      <button className="btn" onClick={plusOne}>plus 1</button>
      <button className="btn" onClick={equalToZero}>reset</button>
      <hr/>
    </div>
  )
}