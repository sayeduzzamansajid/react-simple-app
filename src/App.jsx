import { Suspense } from 'react'
import './App.css'
import Botteles from './Components/Botteles/Botteles'

//data load promise 
const bottelsePromise = fetch('./botteles.json').then(res => res.json())


function App() {
  return (
    <>
      <h1>Buy Awsome Water Bottel</h1>
      <Suspense fallback={<h3>Botteles are loading</h3>}>
        <Botteles bottelsePromise={bottelsePromise} >

        </Botteles>
      </Suspense>
    </>
  )
}

export default App
