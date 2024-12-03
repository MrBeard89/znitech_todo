import { TaskInput } from './components/TaskInput/TaskInput'
import Box from '@mui/material/Box'

import FormControl from '@mui/material/FormControl'
import { AppContextProvider } from './context/AppContext'
import { Tasks } from './components/Tasks/Tasks'

function App() {
  return (
    <AppContextProvider>
      <Box
        sx={{
          display: 'flex',
          gap: '3rem',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: '100vh',
          pl: '1rem',
          pr: '1rem',
        }}
      >
        {/* Header input Section ✌️ */}
        <FormControl fullWidth>
          <TaskInput />
        </FormControl>

        {/* Tasks Components Section 👇 */}
        {}
        <FormControl fullWidth>
          <Tasks />
        </FormControl>
      </Box>
    </AppContextProvider>
  )
}

export default App
