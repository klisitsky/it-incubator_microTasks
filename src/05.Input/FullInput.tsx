import React, { ChangeEvent, useState} from "react";

type FullInputType = {
  addTask: (text:string)=>void
}

export const FullInput: React.FC<FullInputType>= (props) => {

  let [title, setTitle] = useState('')

  const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onClickHandler = () => {
    props.addTask(title)
    setTitle('')
  }
  return (
    <div>
      <input value={title} onChange={onChangeInputHandler}/>
      <button onClick={onClickHandler}>+</button>
    </div>
  )
}