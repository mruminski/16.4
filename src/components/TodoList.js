import React from 'react'
import style from './TodoList.css'


const TodoList = ({list, method }) => 
  (<ul className={style.TodoList}>
    {(list.length > 0 && list.map(i =>
      <li key={i.id}>{i.text}</li>))}
    </ul>)

export default TodoList;