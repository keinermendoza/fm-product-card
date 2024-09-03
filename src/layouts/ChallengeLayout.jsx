import React from 'react'

export default function ChallengeLayout({children}) {
  return (
    <section className='layout'>
      <h1 className="hide">Wellcome to my solution for the Frontend Mentor Product-Card Challenge</h1>
      <div className="challenge-layout__body">
        {children}
      </div>
    </section>
  )
}
