import React, {useState, useEffect} from "react";
import "./App.css"; //import enough if css
import Child from "./components/Child";
import axios from "axios";
import CounterComponent from "./components/Zoomyboy";
import Header from './components/Header'
import Body from './components/Body'

function App() {


const [aState, setAState] = useState(100)
console.log(aState + " indeed a state")

  useEffect(() => {

    // This axios GET request will return a single image
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T")
    // Which we then set to state
    .then(res => setAState(res.data.url))
    // if you can read this comment please send help
    // Always include error handling
    .catch(err => console.log(err));
    console.log(useEffect)
    console.log("here")
  }, []); 


  
//useEffect(() => {}
// Not synced with any data, so this effect only fires once
//not sure how the brackets work. asking for an explanation likely not so smart
//just going with it for now
// source:
// https://lambdaschool.instructure.com/courses/785/pages/objective-3-fetch-data-from-an-api-using-the-effect-hook?module_item_id=551953


//tuple = array of fixed length 2
//useState returns a tuple (array of two)
//[stateValue, functionToSetValue]

// app.js
// fetch data, add state
// https://api.nasa.gov/#apod
// QYuvvgdds0NiCPn4sb5UvuJwStM2A63ptJlW4G9T
// use endpoint, fetch data w. axios
// in then() use console log on response see data
// add dependency array to effect hook (empty?)


  return (
    <div background-color="yellow" className="App" > 
      <Header/>
      <Body/>
      <p id="test" >
        Read through the instructions in the README.md file to build your NASA
        app! Have fu  n <span role="img" aria-label="go!">🚀</span>!
      </p>

      <img src="https://media.tenor.com/images/cdfed1a6dcf16a9b1f84b21cdac076c4/tenor.gif" alt="doggo gif" width="125" height="150"/>
      <Child name="Edward" headset="logitech" arr={[1, 2, 3]} payAttentionToBrackets = {['brackets', 'twoOfThem']} aState={aState} /> 
      <Child name="Joey" headset="logitech" arr={[1, 2, 3]} payAttentionToBrackets = {['brackets', 'twoOfThem']} aState={aState} /> 
      <Child name="danny" headset="sennheiser" arr={[1, 2, 3]} payAttentionToBrackets = {['brackets', 'twoOfThem']} aState={aState} /> 
      <Child name="timmy" headset="logitech" arr={[1, 2, 3]} payAttentionToBrackets = {['brackets', 'twoOfThem']} aState={aState} />
      <CounterComponent/>

      <h1>space</h1>
      <img src={aState} width="250" height="300" alt="a pic from space"/>

      {/* any non-string needs {} */}

    </div>
    
  );
}

export default App;
