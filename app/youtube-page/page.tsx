"use client"

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { navVariants } from '@/utils/motion'



const page = () => {

  const API = 'AIzaSyAiWsSBTmbcogIKdyD871bqsn-hXSjHDOg'

  const channelId = 'UCzBYOHyEEzlkRdDOSobbpvw'

  const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=18`

  const [allvideos, setAllvideos] = useState([])

  useEffect(() => {
      fetch(fetchurl).then((response) => response.json()).then((resJson) => {
          const result = resJson.items.map((doc: { id: { videoId: string } }) => ({
              ...doc,
              Videolink: 'https://www.youtube.com/embed/' + doc.id.videoId
          }));
          setAllvideos(result)
      })
  }, [])

  console.log(allvideos)
  return (
   <div className='container'>
    <div className='grid grid-cols-3'>
        {allvideos.map((items) => {
          return(
            <motion.div variants={navVariants} initial='hidden' whileInView='show' className='mt-5 flex-center'>
              <div>
              <iframe width="400" height="200" src={items.Videolink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </motion.div>
          )
        })}
    </div>
   </div>
       
  )
}

export default page
