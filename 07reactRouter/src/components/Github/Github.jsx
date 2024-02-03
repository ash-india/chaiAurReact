import React from 'react'
import { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ash-india')
    //     .then(res => res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-white text-3xl p-4'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git hub pe mera Photo" />
    </div>

  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/ash-india');
    return response.json();
}