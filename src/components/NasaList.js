import React from 'react';
import axios from 'axios';


export default class NasaList extends React.Component {
    state = {
        persons: [];
    };

    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T')
    }
}