import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Checkbox from '@mui/material/Checkbox'
import { MdDeleteOutline } from 'react-icons/md'

export const Tasks = () => {
  const { todoList } = useContext(AppContext)
  return (
    <>
      {todoList.map((task, index) => {
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
              <Checkbox />
              <Typography
                variant='body1'
                sx={{
                  maxWidth: '50vw',
                  color: 'gray',
                  textAlign: 'left',
                  maxHeight: '3rem',
                  overflowY: 'scroll',
                }}
              >
                {task.taskName}
              </Typography>
            </Box>

            <Button>
              <MdDeleteOutline style={{ fontSize: '1.5rem' }} />
            </Button>
          </Box>
        )
      })}
    </>
  )
}
