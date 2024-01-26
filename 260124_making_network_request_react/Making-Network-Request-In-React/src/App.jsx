import { useEffect, useState } from 'react'
import DataDisplay from './Components/DataDisplay'

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null); 





  const API_URL = "https://jsonplaceholder.typicode.com/posts"

  async function fetchData(){
    try {
      setisLoading(true)
      const res = await fetch(API_URL)
      const finalData = await res.json()
      setData(finalData)
    } catch (error) {
      setError("No Data Found")
    }
    finally{
      setisLoading(false)
    }
  }

  return (
    <>
    <p>Making Network Request On Click With React</p>
    <button onClick={()=>fetchData()}>FetchData</button>
    <DataDisplay
    Load={isLoading}
    Error = {error}
    Array={data}
    />
    
    </>
  )
}

export default App
