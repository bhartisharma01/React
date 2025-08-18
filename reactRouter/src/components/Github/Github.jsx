import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bhartisharma01').then((res) => res.json()).then((data) =>{
            
    //         console.log("datataa", data)
    //         setData(data)})
    // }, [])

    return (
        <div className='bg-gray-800 text-center text-white text-3xl'>Github Followers: {data?.followers}
        <p>User name: {data?.name}</p>
        {/* <img src={data.avatar_url} alt="github profile pic"/> */}
        
        </div>
    )
}

export default Github