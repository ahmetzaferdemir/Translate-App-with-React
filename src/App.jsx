import { useState } from 'react'
import Translate from './components/Translate'


function App() {

  return (
    <>
      <h1 className='h1 fw-bold mt-5 text-center'>Translate App</h1>

      <div className='row w-75 mx-auto main'>
        <Translate />
      </div>
    </>
  )
}

export default App
