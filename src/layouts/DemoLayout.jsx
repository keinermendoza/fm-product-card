import React from 'react'

export default function DemoLayout({children}) {
  return (
    <section className='layout demo-layout'>
        <h1 className='title'>Wellcome to the Demo Mode</h1>
        <div className='paragrpahs'>
          <p>My name is <a id='me' href="https://github.com/keinermendoza">Keiner Mendoza</a>, and I'm from Venezuela. Feel free to message me with suggestions, questions, or job offers.</p>
          <p>The idea here is to show that the design is componentized, making it easy to adapt to a real project</p>
        </div>

        <div className='demo-layout__body'>
          {children}
        </div>
    </section>
  )
}
