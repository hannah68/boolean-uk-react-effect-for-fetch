import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=11')
      .then(res => res.json())
      .then(data => {
        setUserInfo(data.results)
      })
  },[])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userInfo={userInfo}/>
      </div>
    </section>
  )
}

export default UsersSection
