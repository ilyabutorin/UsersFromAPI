import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Users from "../Users";
import s from './style.module.css'

function App() {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    (async () => {
      const resp = await fetch('https://fakestoreapi.com/users')
      const data = await resp.json();
      setUsers(data.map(({ id, email, name }) => ({ id, email, name })))
    })()
  }, []);


  return (
    <div className={s.user_container}>
      {
        users
          .map(user =>
            <Users
              key={user.id}
              {...user} />)
      }

    </div>
  );
}

export default App;