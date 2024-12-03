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
      return false
    }
    const task = {
      id: todoList.length === 0 ? +1 : todoList[todoList.length - 1].id + 1,
      taskName: taskInputValue,
      completed: false,
    }

    setTodoList([...todoList, task])
    setTaskInputValue('')
  }

  //Delete task function
  const handleDeleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id)
    setTodoList(newTodoList)
  }

  //Checkbox "done" toggle
  const handleDoneTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task
        }
      })
    )
  }

  const contextValue = {
    taskInputValue,
    todoList,
    handleChangetaskInputValue,
    handleAddTask,
    handleDeleteTask,
    handleDoneTask,
  }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
