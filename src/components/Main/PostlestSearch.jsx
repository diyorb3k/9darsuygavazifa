import React, { useEffect, useState } from 'react'
import './Posylest.css'
import './postlist/Postlist'
import './postlist/Postlist'

const PostlestSearch = () => {
  const[data,setDat]=useState([])
  const [query, setQuery] = useState("");

 
  const filteredData = data.filter(
    (user) =>
      user.body.toLowerCase().includes(query.toLowerCase())
  );
  
 
  return (
    <div className='container'>
        <form action="">
            <input className='inputt' type="text"  placeholder='Searching...'  value={query} onChange={(e) => setQuery(e.target.value)}   
            />
            
        </form>
    </div>  
  )
}

export default PostlestSearch