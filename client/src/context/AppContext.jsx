import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const [taskInputValue, setTaskInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChangetaskInputValue = (e) => {
    setTaskInputValue(e.target.value)
  }

  //Addtask Function
  const handleAddTask = () => {
    if (taskInputValue.length === 0) {
      alert('Irj egy Feladatott!')
      return false
    }
    const task = {
      id: todoList.length === 0 ? +1 : todoList[todoList.length - 1].id + 1,
      taskName: taskInputValue,
      completed: false,
    }
    setTodoList([...todoList, task])
    setTaskInputValue('')
    console.log(todoList)
  }

  const contextValue = { taskInputValue, todoList, handleChangetaskInputValue, handleAddTask }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
