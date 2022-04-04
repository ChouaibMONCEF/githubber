import React from "react"

function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Githubber</h1>
      <p className='mb-4 text-2xl font-light'>
        Another React app as a practice. <br />
        <strong>
          <a href='https://github.com/ChouaibMONCEF'>My Github</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-blue-800'>1.0.0</span>
      </p>
    </>
  )
}

export default About
