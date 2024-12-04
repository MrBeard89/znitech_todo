import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'

export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  //States
  const [taskInputValue, setTaskInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  //URL-s
  const GET_ALL_URL = 'http://localhost:8000/getAll'
  const DELETE_REQUEST_URL = 'http://localhost:8000/deleteTask'
  const DONE_REQUEST_URL = 'http://localhost:8000/doneTask'

  //Összes feladat
  const Getall = async () => {
    try {
      Axios.defaults.baseURL = GET_ALL_URL
      //Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
      Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      const response = await Axios.get(GET_ALL_URL)
      const dataString = JSON.stringify(response.data)
      const parsedData = JSON.parse(dataString)
      setTodoList(parsedData)
    } catch (error) {
      console.error(error)
    }
  }

  //Input field
  const handleChangetaskInputValue = (e) => {
    setTaskInputValue(e.target.value)
  }

  //A törlést igy oldottam meg mert a useHookal valamiért nem sikerült, nem updatelődött a state, igy idő szűkébben,
  //és mert nem akartam hogy jobban elhúzódjon !

  //Delete Task
  const handleDeleteTask = (id) => {
    let postData
    const DeleteReq = async () => {
      postData = {
        id: id,
      }

      Axios.post(DELETE_REQUEST_URL, postData)
        .then((response) => {
          const dataString = JSON.stringify(response.data)
          const parsedData = JSON.parse(dataString)
          setTodoList(parsedData)
          setTaskInputValue('')
        })
        .catch((error) => {
          console.error(error)
          return []
        })
    }
    DeleteReq()
  }

  //Checkbox "done" toggle
  const handleDoneTask = (id) => {
    let postData
    const DoneReq = async () => {
      postData = {
        id: id,
      }

      Axios.post(DONE_REQUEST_URL, postData)
        .then((response) => {
          const dataString = JSON.stringify(response.data)
          const parsedData = JSON.parse(dataString)
          setTodoList(parsedData)
          setTaskInputValue('')
        })
        .catch((error) => {
          console.error(error)
          return []
        })
    }
    DoneReq()
  }

  //Init call for get all tasks - csak egyszer fut le, mivel válaszban mindig küldöm az aktuális tömböt, kérésnél
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
    handleDeleteTask,
    handleDoneTask,
  }

  return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>
}
