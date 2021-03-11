import React from 'react';

//why not vars?
// const name = 'edward';
// const headset = 'logitech';

const Child = props => {
    console.log(props.aState)
    return <p> Hello {props.name} </p>
}


// ```js
// // Display a loading message while the data is fetching
// if (!props.photoOfTheDay) return <h3>Loading...</h3>;

// // Display your component as normal after the data has been fetched
// return (
//   {/* your normal JSX here */}
// );
// ```

export default Child