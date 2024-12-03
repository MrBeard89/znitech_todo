import { Button } from '@mui/material'
import { TaskInput } from './components/TaskInput/TaskInput'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { IoRocketSharp } from 'react-icons/io5'
import FormControl from '@mui/material/FormControl'

function App() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        height: '100vh',
        pl: '1rem',
        pr: '1rem',
      }}
    >
      <FormControl fullWidth>
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

          <Button variant='contained' sx={{ height: '3rem', width: '3rem' }}>
            <IoRocketSharp style={{ fontSize: '1.5rem' }} />
          </Button>
        </Box>

        <TaskInput />
      </FormControl>
    </Box>
  )
}

export default App
