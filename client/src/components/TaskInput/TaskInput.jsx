import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { IoRocketSharp } from 'react-icons/io5'
import { Button } from '@mui/material'
import { AppContext } from '../../context/AppContext'

export const TaskInput = () => {
  const { taskInputValue, handleChangetaskInputValue, handleAddTask } = useContext(AppContext)
  let taskInput = document.getElementById('task_add_basic')

  taskInput?.addEventListener(
    'keypress',
    (e) => {
      //console.log(e.code)
      if (e.key === 'Enter') {
        e.preventDefault()
        document.getElementById('myBtn').click()
        // e.stopImmediatePropagation()
      }
    },
    { once: true }
  )
  return (
    <Box>
      <form method='#' action='#'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 'fit-content',
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontWeight: '700',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
              mb: '0.5rem',
              mt: '3rem',
            }}
          >
            Tasks
          </Typography>

          <Button
            id='myBtn'
            variant='contained'
            sx={{ height: '2.5rem', width: '2.5rem', mt: '1.5rem' }}
            onClick={handleAddTask}
          >
            <IoRocketSharp style={{ fontSize: '1rem' }} />
          </Button>
        </Box>

        <TextField
          fullWidth
          id='task_add_basic'
          label='New Task:'
          variant='standard'
          type='string'
          value={taskInputValue}
          onChange={handleChangetaskInputValue}
          required
        />
      </form>
    </Box>
  )
}
