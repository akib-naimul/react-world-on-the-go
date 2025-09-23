
import { Suspense } from 'react'
import './App.css'
import Countries from './components/counties/countries'

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res=> res.json())

function App() {
  

  return (
    <>
      
      <h1>Module-38 </h1>
      <h2>React World On the Go</h2>

      <Suspense fallback={<p>Your Requested Data is Loading....</p>}>
         <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
      
    </>
  )
}

export default App
