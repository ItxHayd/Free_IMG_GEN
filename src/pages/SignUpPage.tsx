
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../utils/axios.ts";
import { Toaster } from "react-hot-toast";
import  axios  from "axios";


const SignUpPage: React.FC = () => {
  
  const navigate = useNavigate();

  const [loading, setLoading]=useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setconfirmPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    if(!email?.trim() || !password?.trim() || !username?.trim() || !confirmpassword?.trim()){
      toast.error("All Fields are required!");
      return;
    }

    if(password !== confirmpassword){
      toast.error("Wrong Password");
      return;
    }
  
    try {
      setLoading(true);
      await api.post("/signup",{
        Username: username,
        Email: email,
        Password: password,
      })
      
      toast.success("SignUp Successful");

      setTimeout(() => {
        navigate("/login");
      }, 2000);

    }  catch (err) {
      if (axios.isAxiosError(err)) {     
        if (err.response?.data?.message) {
          toast.error(err.response.data.message); // This will now show 404 backend message
        } else {
          toast.error("No response from server");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
      setLoading(false);
    }
  
    
  };

  return (
  <>  
    <Toaster/>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-950 via-purple-900 to-purple-800">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-950/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 space-y-5 border border-purple-700"
        >
        <h2 className="text-2xl font-bold text-center text-purple-200">
          Sign Up
        </h2>
        {/* Username */}
         <input
          type="text"
          placeholder="Username"
          minLength={5}
          className="w-full p-3 rounded-lg bg-purple-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
          />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-purple-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
          />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          title="Password must contain at least 1 uppercase letter, 1 number, 1 symbol, and minimum 8 characters"
          pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
          className="w-full p-3 rounded-lg bg-purple-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        {/* confirm password */}
        <input
          type="password"
          pattern="(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}"
          title="Password must contain at least 1 uppercase letter, 1 number, 1 symbol, and minimum 8 characters"
          placeholder="Confirm Password"
          className="w-full p-3 rounded-lg bg-purple-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
          value={confirmpassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          required
          />

        {/* Button */}
        <button
          type="submit"
          disabled= {loading}
          className="w-full disabled:cursor-not-allowed p-3 cursor-pointer rounded-lg bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold transition duration-300 shadow-lg shadow-purple-900/40"
          >
          Sign Up
        </button>

        <p className="text-center text-sm text-purple-400">
          Already have an account?{" "}
          <Link to="/login"><span className="text-purple-300 hover:underline cursor-pointer">
            Log In
          </span></Link>
        </p>
      </form>
    </div>
</>
  );
};

export default SignUpPage;