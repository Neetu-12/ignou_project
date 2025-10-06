import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigation = useNavigate();
  const [dataobj, setdataobj] = useState({});

  const submitbtn = (e, direction) => {
    e.preventDefault();

    if (!!dataobj.email && !!dataobj.password && direction === "login") {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/user/login/`, dataobj)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          alert(response.data.result);
          navigation("../");
          window.location.reload();
        })
        .catch((error) => {
          alert(error.response.data);
          navigation(`../singup`);
        });
    } else if (direction === "singup") {
      navigation(`../singup`);
    } else {
      alert("Fill information correctly");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <form
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <Label htmlFor="email2" value="Your Email" />
          <TextInput
            id="email2"
            type="email"
            placeholder="name@example.com"
            required
            shadow
            onChange={(e) =>
              setdataobj({ ...dataobj, email: e.target.value })
            }
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <Label htmlFor="password2" value="Your Password" />
          <TextInput
            id="password2"
            type="password"
            required
            shadow
            onChange={(e) =>
              setdataobj({ ...dataobj, password: e.target.value })
            }
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={(e) => submitbtn(e, "login")}
            className="bg-green-700 hover:bg-green-800"
            type="submit"
          >
            Login
          </Button>

          <Button
            onClick={(e) => submitbtn(e, "singup")}
            className="bg-gray-800 hover:bg-gray-900"
            type="submit"
          >
            Register New Account
          </Button>

          <Button
            onClick={(e) => submitbtn(e, "singup")}
            className="bg-gray-500 hover:bg-gray-600"
            type="submit"
          >
            Forgot Email / Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
