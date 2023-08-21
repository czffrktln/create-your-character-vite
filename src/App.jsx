import { useState } from 'react'
import Radioinput from './components/Radioinput'
import './App.css'

function App() {

  const kerdes = [
    {kerdes: "gender", valasz1: "cube", valasz2: "triangle", valasz3: "circle"},
    {kerdes: "race", valasz1: "valasz21", valasz2: "valasz22", valasz3: "valasz23"}, 
    {kerdes: "class", valasz1: "valasz31", valasz2: "valasz32", valasz3: "valasz33"}
  ]

  const [state, setState] = useState(
    {name: "", gender: "", race: "", class: ""}
  )

  const [name, setName] = useState("")

  const egyfuggveny = (e) => {
    
    if (e.target.name === "gender") {
      setState(prevState => {
        return {...prevState, gender: e.target.value}})
    }
    if (e.target.name === "race") {
      setState(prevState => {
        return {...prevState, race: e.target.value}})
    }
    if (e.target.name === "class") {
      setState(prevState => {
        return {...prevState, class: e.target.value}})
    }
  }
  
  const masikfuggveny = (e) => {
    setName(e.target.value);
    if (e.key === 'Enter') {
      setName(e.target.value)
      e.target.value = ""
    }
  }

  return (
    <div className="App">
      <div id="choose">
        <h2>Choose your character's ...</h2>
        <h3>name</h3>
        <input type="text" onKeyDown={masikfuggveny} />
        <div id="buborekok">
        {kerdes.map((adat) => <Radioinput adatatadas={adat} fuggvenyatadas={egyfuggveny}></Radioinput>)}
        </div>
      </div>
      <div id="your">
        <h2>Your character's...</h2>
        <h3>name: {name}</h3>
        <h3>gender: {state.gender}</h3>
        <h3>race: {state.race}</h3>
        <h3>class: {state.class}</h3>
        <div id="image"><img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Square_bipyramid.png"/></div>
      </div>
    </div>
  )
}

export default App
