import React from 'react';
import {Button} from "./Button";

export const Btns = () => {

  const ConsoleName = (name:string) => {
    console.log(name)
  }

  return (
    <div><span className="lessonTitle">Lesson 2 - Button</span>
      <br/>
      <br/>
      <Button name={'Vasya'} callback={() => {ConsoleName('Vasya')}}/>
      <Button name={'Petya'} callback={() => {ConsoleName('Petya')}}/>
      <Button name={'I\'m stupid button'} callback={() => {ConsoleName('I\'m stupid buttonS')}}/>
      <hr/>
    </div>
  )
}



