import React, {useState} from 'react';


type FilterMoneyPropsType = {
  money: Array<banknoteType>
}

type banknoteType = {
  banknote: string
  nominal: number
  number: string
}

export const FilterMoney: React.FC<FilterMoneyPropsType> = (props) => {

  const [filter, setFilter] = useState(() => 'all')

  let sortedMoney = props.money;

  switch (filter) {
    case 'dollar':
      sortedMoney = props.money.filter(elem => elem.banknote === filter)
      break;
    case 'ruble':
      sortedMoney = props.money.filter(elem => elem.banknote === filter)
      break;
  }
  const toFilterBanknotesHandler = (filter: string) => {
    setFilter(filter);
  }
  return (
    <div><span className="lessonTitle">Lesson 4 - Filter</span>
      <ul>
        {sortedMoney.map((banknote, index) => {
          return (
            <li key={index}>
              <span className='banknote_prop'></span> {banknote.banknote}:
              <span className='banknote_prop'></span> {banknote.nominal}
              <span className='banknote_prop'></span> ({banknote.number})
            </li>
          )
        })}
      </ul>
      <button onClick={() => toFilterBanknotesHandler('all')}>All</button>
      <button onClick={() => toFilterBanknotesHandler('dollar')}>Dollar</button>
      <button onClick={() => toFilterBanknotesHandler('ruble')}>Ruble</button>
      <hr/>
    </div>
  )
}