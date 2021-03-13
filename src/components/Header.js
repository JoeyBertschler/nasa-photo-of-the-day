import React, {useState, useEffect} from 'react'
import axios from 'axios'

 function Header(){
    const [nasaTitle, setNasaTitle] = useState('')
    useEffect (()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T')
             .then(res => setNasaTitle(res.data.title))
    }, [nasaTitle])

return (
    <h3 className="headerTitle"> {nasaTitle} </h3>
)
}

export default Header //export default function NAME(){} --- OR function NAME(){} ......export default NAME
//imports
//export default + function
// use state const
// use effect + axios
// return with html (jsx?)