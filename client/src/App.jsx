import { TaskInput } from './components/TaskInput/TaskInput'
import Box from '@mui/material/Box'

import FormControl from '@mui/material/FormControl'
import { AppContextProvider } from './context/AppContext'
import { Tasks } from './components/Tasks/Tasks'

function App() {
  return (
    <AppContextProvider>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '3rem',
            flexDirection: 'column',
            //alignContent: 'center',
            height: 'fit-content',
            width: '100%',
            maxWidth: '725px',
            pl: '1rem',
            pr: '1rem',
            //minWidth: '325px',
            //maxWidth: '100%',
          }}
        >
          {/* Header input Section ✌️ */}
          <FormControl fullWidth>
            <TaskInput />
          </FormControl>

          {/* Tasks Components Section 👇 */}

          <FormControl fullWidth sx={{ maxHeight: '500px', overflowY: 'scroll' }}>
            <Tasks />
          </FormControl>
        </Box>
      </Box>
    </AppContextProvider>
  )
}

export default App
