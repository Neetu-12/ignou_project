import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigation = useNavigate();
  const [dataobj, setdataobj] = useState({});

  const submitbtn = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/registration`, dataobj)
      .then((response) => {
        alert(response.data);
        console.log(response.data);
        navigation("../login");
      })
      .catch((error) => {
        alert(error.response.data);
        console.log("Error occurred during registration");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
      <form
        onSubmit={submitbtn}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Register Your Account
        </h2>

        {/* Name Field */}
        <div className="mb-4">
          <Label htmlFor="name" value="Your Name" />
          <TextInput
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            shadow
            onChange={(e) =>
              setdataobj({ ...dataobj, name: e.target.value })
            }
          />
        </div>

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
          <Label htmlFor="password" value="Your Password" />
          <TextInput
            id="password"
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
            type="submit"
            className="bg-green-700 hover:bg-green-800"
          >
            Register
          </Button>

          <Button
            onClick={() => navigation("../login")}
            type="button"
            className="bg-gray-800 hover:bg-gray-900"
          >
            Back to Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
