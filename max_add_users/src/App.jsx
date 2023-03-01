import { useState } from 'react'
import "./App.css"
import AddUser from "./Comps/Users/AddUser"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <AddUser/>
    </div>
  )
}

export default App
