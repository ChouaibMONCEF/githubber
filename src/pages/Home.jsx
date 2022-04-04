import React from "react"
import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"

function Home() {
  return (
    <>
      <h1 className=''>
        <UserSearch />
        <UserResults />
      </h1>
    </>
  )
}

export default Home
