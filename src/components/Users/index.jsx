import React from 'react'
import s from './style.module.css'

export default function Users({email, name}) {


  return (
    <div className={s.card}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrwJM9SvzoW6bSdoRDpJSn12ppUda6_d0fAeqcghy9JGHc_2lmkVym2zf-LgnMsvC4u0&usqp=CAU" alt="userlogo" />
        <p>{name.firstname} {name.lastname}</p>
        <a href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
