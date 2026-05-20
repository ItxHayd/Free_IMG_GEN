
import { Link ,useNavigate} from "react-router-dom";
import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import api from "../utils/axios";
import toast from "react-hot-toast";
import axios from "axios";

interface GoogleJwtPayload {
  name?: string;
}




const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const res = await api.post("/login",{  // send to backend
        Email: email,
        Password: password,
      })
      localStorage.setItem("token", res.data.token);

      toast.success("Login Successful");
      navigate('/home');

    } catch (err) {
      if (axios.isAxiosError(err)) {     
        if (err.response?.data?.message) {
          toast.error(err.response.data.message); // This will now show 404 backend message
        } else {
          toast.error("No response from server");
        }
      } else {
        toast.error("An unexpected error occurred");
      }
    }

  };

  const GoogleResponse = (credentialResponse:any)=>{
      const decoded = jwtDecode<GoogleJwtPayload>(credentialResponse.credential);
      toast.success(`Welcome  ${decoded.name}`);
      navigate("/home");
  }
  


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-950 via-purple-900 to-purple-800">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-950/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-80 space-y-5 border border-purple-700"
      >
        <h2 className="text-2xl font-bold text-center text-purple-200">
          Welcome 
        </h2>

        {/* Email */}
       
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-purple-900 text-white border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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

        {/* Button */}
        <button
          type="submit"
          className="w-full active:scale-98 cursor-pointer p-3 rounded-lg bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold transition duration-300 shadow-lg shadow-purple-900/40"
        >
          Login
        </button>




        <p className="text-center text-sm text-purple-400">
          Don't have an account?{" "}
          <Link to="/signup"><span className="text-purple-300 hover:underline cursor-pointer">
            Sign up
          </span></Link>
        </p>
        
        
        <div className="flex  mx-auto overflow-hidden rounded-lg w-fit">
          <GoogleLogin text={"continue_with"} shape="rectangular" onSuccess={GoogleResponse} onError={() => {console.log('Login Failed');}} auto_select={true}  theme="filled_blue" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;