import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  
  const navigation = useNavigate();
  const [dataobj, setdataobj] = useState({})

  const submitbtn = (e, direction) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    
    if (!!dataobj.email && !!dataobj.password && direction === 'login') {
      axios.post('http://localhost:4000/user/login/',dataobj)
      .then((response) => {
        localStorage.setItem('token',response.data.token)        
        alert(response.data.result)
        navigation('../')
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data)
        navigation(`../singup`)
      });
    }else if (direction === 'singup') {
      navigation(`../singup`)
    }else{
      alert('Fill information correctly')
    }
  }
  return (
    <div className='mt-24 flex justify-center'>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" onChange={(e) => { setdataobj({ ...dataobj, "email": e.target.value }) }} type="email" placeholder="name@flowbite.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" onChange={(e) => { setdataobj({ ...dataobj, "password": e.target.value }) }} type="password" required shadow />
        </div>
        {/* <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" onChange={(e)=>{setdataobj({...dataobj,"repeat-password":e.target.value})}} type="password" required shadow />
        </div> */}
        <div className="btnfun flex text-center justify-between p-[0.8rem]  ">
          <Button onClick={(e) => { submitbtn(e, 'singup') }} type="submit" className='bg-black mb-0.5 ml-1 mr-1'>Register new account</Button>
          <Button onClick={(e) => { submitbtn(e, 'login') }} type="submit" className='border-r-indigo-700 bg-lime-700 mb-0.5 ml-1 mr-1'>Submit here</Button>
          <Button onClick={(e) => { submitbtn(e, 'singup') }} type="submit" className='bg-neutral-600 mb-0.5 ml-1 mr-1'>Forget email/password</Button>
        </div>
      </form>
    </div>
  )
}

export default Login;