import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Checkbox from '@mui/material/Checkbox'
import { MdDeleteOutline } from 'react-icons/md'

export const Tasks = () => {
  const { todoList, handleDeleteTask, handleDoneTask } = useContext(AppContext)
  return (
    <>
      {todoList.length == 0 ? (
        <Box sx={{ textAlign: 'center', color: 'gray' }}>Nincs több Feladat! 🥳</Box>
      ) : (
        todoList.map((task, index) => {
          return (
            <Box
              fullWidth
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: '1.5rem',
              }}
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
            </Box>
          )
        })
      )}
    </>
  )
}
