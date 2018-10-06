import React from 'react'

const TodoList = ({list, method }) => 
  (<ul className='todo__list'>
  {(list.length > 0 && list.map(i =>
    <li className='todo__item' key={i.id}>{i.text}</li>))};
  </ul>)

export default TodoList;