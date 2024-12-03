import Axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export function useAddTask() {
  const { taskInputValue, todoList, setTodoList, setTaskInputValue } = useContext(AppContext)
  // ****************** Post request ******************* //
  //
  let RESPONSE_URL = 'http://localhost:8000'
  let responseState
  let postData
  let task

  //Addtask Function
  const handleAddTask = () => {
    if (taskInputValue.length === 0) {
      return false
    }
    task = {
      id: todoList.length === 0 ? +1 : todoList[todoList.length - 1].id + 1,
      taskName: taskInputValue,
      completed: false,
    }

    //setTodoList([...todoList, task])
    setTaskInputValue('')
    return task
  }

  const Req = async () => {
    postData = {
      id: task.id,
      taskName: task.taskName,
      completed: task.completed,
    }
    task === undefined
      ? ''
      : Axios.post(RESPONSE_URL, postData)
          .then((response) => {
            const dataString = JSON.stringify(response.data)
            const parsedData = JSON.parse(dataString)
            setTodoList(parsedData)
          })
          .catch((error) => {
            console.error(error)
            return []
          })
  }

  function Send() {
    handleAddTask()
    Req()
  }

  return Send
}
