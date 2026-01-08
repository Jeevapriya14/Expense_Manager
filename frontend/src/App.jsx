import { useState } from 'react'
import './App.css'
import RoleSelection from './pages/RoleSelection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min h-screen">
      <RoleSelection />
    </div>
  )
}

export default App
