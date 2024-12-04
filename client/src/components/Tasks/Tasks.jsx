import { Box, Button, Typography } from '@mui/material'
import React, { useContext, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import Checkbox from '@mui/material/Checkbox'
import { MdDeleteOutline } from 'react-icons/md'

export const Tasks = () => {
  const { todoList, setTodoList, handleDoneTask, handleDeleteTask } = useContext(AppContext)

  const dragTask = useRef(0)
  const draggedOverTask = useRef(0)

  //DND funkcionalítáahoz handle function
  function handleSort() {
    const todoClone = [...todoList]
    const temp = todoClone[dragTask.current]
    todoClone[dragTask.current] = todoClone[draggedOverTask.current]
    todoClone[draggedOverTask.current] = temp
    setTodoList(todoClone)
  }
  return (
    <>
      {todoList.length == 0 ? (
        <Box sx={{ textAlign: 'center', color: 'gray' }}>Nincs több Feladat! 🥳</Box>
      ) : (
        todoList.map((task, index) => {
          return (
            <div
              draggable
              fullWidth
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem',
              }}
              //DND functionality
              onDragStart={() => (dragTask.current = index)}
              onDragEnter={() => (draggedOverTask.current = index)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox
                  checked={task.completed ? true : false}
                  onClick={() => handleDoneTask(task.id)}
                />
                <Typography
                  variant='body1'
                  sx={{
                    maxWidth: '50vw',
                    color: 'gray',
                    textAlign: 'left',
                    maxHeight: '3rem',
                    overflowY: 'scroll',
                    textDecorationLine: task.completed ? 'line-through' : 'none',
                  }}
                >
                  {task.taskName}
                </Typography>
              </Box>

              <Button onClick={() => handleDeleteTask(task.id)}>
                <MdDeleteOutline style={{ fontSize: '1.5rem' }} />
              </Button>
            </div>
          )
        })
      )}
    </>
  )
}
