import { useState } from 'react'
import ARScene from './components/ARScene'
export default function App() {

  const [clr, setClr] = useState('#4CC3D9')

  const toggle = () => setClr(c => (c === '#4CC3D9' ? '#EF2D5E' : '#4CC3D9'))

  if (document.querySelector('#box')) {

    document.querySelector('#box').setAttribute('color', clr)

  }



  return (

    <>

      <button onClick={toggle}>Toggle color</button>

      <ARScene />

    </>

  )

}
