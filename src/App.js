import './css/app.css'

import { useState } from "react";
import Toggle from "./components/toggle/toggle";

const arr = []

function App() {
  const [estados,setEstados] = useState([false,false,false])
  return (
    <main className="app">
      <Toggle text="Money" arr={arr} num={0} checked={estados} setEstados={setEstados}/>
      <Toggle text="Time" arr={arr} num={1} checked={estados} setEstados={setEstados}/>
      <Toggle text="Energy" arr={arr} num={2} checked={estados} setEstados={setEstados}/>
    </main>
  )
}

export default App;
