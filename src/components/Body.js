import axios from "axios"
import React, {useState, useEffect} from 'react'

export default function Body(){

const [imgData, setImgData] = useState('')
const [nasaDescription, setNasaDescription] = useState('')

useEffect (()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T')
         .then(res => setImgData(res.data.url))
    return () => console.log('cleanup effect hook')
}, [imgData])

useEffect (()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T')
         .then(res => setNasaDescription(res.data.explanation))
    return () => console.log('cleanup effect hook')
}, [nasaDescription])

return (
    <div className = 'imgContainer'>
        <img src={imgData}/>
        <div>
            <h4>{nasaDescription}</h4>
        </div>
    </div>
)
}