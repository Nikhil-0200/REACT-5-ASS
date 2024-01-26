import { useState } from 'react'
import './App.css'
import DataDisplay from './Components/DataDisplay'

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null); 

  

  return (
    <>
    <p>Hi</p>
    </>
  )
}

export default App
