import { useState } from 'react'
import './App.css'
import {Button} from "my-react-lib";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Button label="Click me" onClick={() => setCount(count + 1)}/>
      </div>
    </>
  )
}

export default App
