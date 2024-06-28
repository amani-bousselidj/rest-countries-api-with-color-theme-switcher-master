
import { Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import { ThemeProvider } from './ThemeContext';
import  Container  from '@mui/material/Container';
import  Box  from '@mui/material/Box';
import ContriesDetails from './components/ContriesDetails';
function App() {

  return (
    <ThemeProvider>
    <NavBar />
    <Box sx={{p:'3rem 0'}}>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path=':contriesName' element={<ContriesDetails />} />
        </Routes>
      </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
