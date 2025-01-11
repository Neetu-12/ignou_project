import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDasbord = () => {
    let nav = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            alert('please login or singUp First..!!!')
            nav('../login')
        }
    }, [])
    
  return (
    <div className='min-h-svh'>UserDasbord</div>
  )
}

export default UserDasbord;