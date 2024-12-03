import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { IoRocketSharp } from 'react-icons/io5'
import { Button } from '@mui/material'
import { AppContext } from '../../context/AppContext'

export const TaskInput = () => {
  const { taskInputValue, handleChangetaskInputValue, handleAddTask } = useContext(AppContext)
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
              mb: '2rem',
              mt: '2rem',
            }}
          >
            Tasks
          </Typography>

          <Button
            variant='contained'
            sx={{ height: '3rem', width: '3rem' }}
            onClick={handleAddTask}
          >
            <IoRocketSharp style={{ fontSize: '1.5rem' }} />
          </Button>
        </Box>

        <TextField
          fullWidth
          id='standard-basic'
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
