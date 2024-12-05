import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/faisalkhan-dev')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-2 text-2xl'> Github username: {data.name}
    <br />Github followers: {data.followers}
    <br />Github Bio :{data.bio}
    <img className='mx-auto block rounded-full w-60 h-62' src={data.avatar_url} alt="Git picture" width={200} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/faisalkhan-dev')
    return response.json()
}