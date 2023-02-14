import React from 'react';

type BtnType = {
  name: string
  callBack: () => void
}

export const Btn: React.FC<BtnType> = (props) => {

  const onClickBtnHandler = () => {
    props.callBack()
  }
  return <button onClick={onClickBtnHandler}>{props.name}</button>;
}