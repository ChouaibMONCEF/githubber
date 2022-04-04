import React, { useContext } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
import GithubContext from "../../Context/Github/GithubContext"

function UserResults() {
  const { users, isLoading} = useContext(GithubContext)
    


  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 gap-5 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2'>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div> 
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
