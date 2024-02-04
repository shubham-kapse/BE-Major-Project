'use client'

import React, { useEffect, useState } from 'react'

const page = () => {

  const [mynews, setMyNews] = useState([])

    const fetchData = async () => {
        let response = await fetch('https://newsapi.org/v2/top-headlines/sources?category=health&apiKey=d58dc1f4942a428e9d6d30a49743748e')
        let data = await response.json();
        setMyNews(data)
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <>
      {mynews.map((ele) => {
        return(
          <>
          
          </>
        )
      })}    
    </>
  )
}

export default page

//d58dc1f4942a428e9d6d30a49743748e