import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigation = useNavigate();
  const [dataobj, setdataobj] = useState({})

  const submitbtn = (e, direction) => {
    e.preventDefault(); // Prevents the default form submission (page reload)
    
    axios.post('https://ignou-project-4.onrender.com/registration',dataobj)

    .then((response) => {
      alert(response.data)
      console.log(response.data);
      navigation(`../login`)
    })
    .catch((error) => {
      alert(error.response.data)
      console.log('error aa gyaa....!!');      
    });
  }
  return (
    <div className='mt-24 flex justify-center'>
      <form className="flex max-w-md flex-col gap-4">
      <div>
          <div className="mb-2 block w-[28rem]">
            <Label htmlFor="name" value="Your name" />
          </div>
          <TextInput id="name" onChange={(e) => { setdataobj({ ...dataobj, "name": e.target.value }) }} type="text" placeholder="Enter your name" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput id="email2" onChange={(e) => { setdataobj({ ...dataobj, "email": e.target.value }) }} type="email" placeholder="name@flowbite.com" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" onChange={(e) => { setdataobj({ ...dataobj, "password": e.target.value }) }} type="password" required shadow />
        </div>
        <div className="btnfun flex text-center justify-between p-[0.8rem] ">
          <Button onClick={(e) => { submitbtn(e, 'login') }} type="submit" className='bg-black mb-0.5 ml-1 mr-1'>Register your account</Button>
          <Button onClick={(e) => { navigation(`../login`) }} type="submit" className='border-r-indigo-700 bg-lime-700 mb-0.5 ml-1 mr-1'>Back to login</Button>
          {/* <Button onClick={(e) => { submitbtn(e, 'signing') }} type="submit" className='bg-neutral-600 mb-0.5 ml-1 mr-1'>Forget email/password</Button> */}
        </div>
      </form>
    </div>
  )
}

export default Login;