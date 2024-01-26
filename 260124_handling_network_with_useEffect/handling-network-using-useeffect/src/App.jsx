import { useState, useEffect } from 'react'
import PostItem from './Components/PostItem';


function App() {
  const [loading, setloading] = useState(false);
  const [post, setpost] = useState([]);
  const [err, seterror] = useState(null);
  const [page, setpage] = useState(1);

  async function fetchData(page){
    try {
      setloading(true)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const finalData = await res.json();
    setpost(finalData);
    console.log(finalData); 
    } catch (error) {
      seterror("Data Not Found")
    }
    finally{
      setloading(false)
      console.log(page);
    }
  }

  function PaginationNext(){
    setpage((prevPage)=> (prevPage < 10 ? prevPage + 1 : prevPage))
  }

  function PaginationPrevious(){
    setpage((prevPage)=> (prevPage > 1 ? prevPage - 1 : 1))
  }

  useEffect(()=>{
    fetchData(page)
  }, [page])


  return (
    <>
    <PostItem
    PaginationNext = {()=>PaginationNext()}
    PaginationPrevious = {()=>PaginationPrevious()}
    Page = {page}
    Array = {post}/>
    </>
  )
}

export default App
