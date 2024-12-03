import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  //States
  const [taskInputValue, setTaskInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  const Getall = async () => {
    try {
      Axios.defaults.baseURL = 'http://localhost:8000/'
      //Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
      Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      const response = await Axios.get('http://localhost:8000/')
      const dataString = JSON.stringify(response.data)
      const parsedData = JSON.parse(dataString)
      setTodoList(parsedData)
    } catch (error) {
      console.error(error)
    }
  }

  //Input field
  const handleChangetaskInputValue = (e) => {
    console.log(e.target.value)
    setTaskInputValue(e.target.value)
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

  useEffect(() => {
    Getall()
  }, [])

  //ContextValues
  const contextValue = {
    taskInputValue,
    setTaskInputValue,
    todoList,
    setTodoList,
    handleChangetaskInputValue,
    // handleAddTask,
    handleDeleteTask,
    handleDoneTask,
  }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
