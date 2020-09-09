import React from 'react'
import './style.css'
import SlotM from './SlotM'
const App=()=>{
   return (
       <>
           <h1 className="heading_style">🎰 Welcome SlotMachine Game 🎰</h1>
           <div className='slotBox'>
           <SlotM x='😄' y='😄' z='😄' />
           <SlotM x='💗' y='🍎' z='💗'/>
           <SlotM x='🍡' y='🐜' z='🍌'/>
           </div>
       </>
   )
}

export default App