import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export const TaskInput = () => {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <TextField
        fullWidth
        id='standard-basic'
        label='New Task:'
        variant='standard'
        sx={{ width: '150%' }}
      />
    </Box>
  )
}
