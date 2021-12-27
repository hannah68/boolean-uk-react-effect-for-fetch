import { useEffect, useState } from "react"
import UsersList from "./components/UsersList"

function UsersSection() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try{
        const res = await fetch('https://randomuser.me/api/?results=20')
        const userdata = await res.json();
        const data = userdata.results;
        setUserData(data);
      }
      catch(err){
        console.log('error:', err);
      }
    }
    fetchUserData();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList userData={userData}/>
      </div>
    </section>
  )
}

export default UsersSection