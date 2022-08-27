import './App.css'
import { AppNavigator } from "./routes/AppNavigator"
import NavBar from './routes/NavBar'

function App() {

  return (
    <div className="App">
      <NavBar />
      <AppNavigator />
    </div>
  )
}

export default App
