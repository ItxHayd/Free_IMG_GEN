import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'
import Dropdown from './Dropdown';



function Nav(){
    return(
        <div className="flex h-22 border-[#564D65] w-11/12 md:w-full border-2 rounded-3xl lg:w-9/12 mt-5 mx-auto ">
            <Link to="/home"><img src={Logo} alt="logo" className="w-32 md:w-full mr-3 h-full cursor-pointer"/></Link>
            <div className="cursor-default mt-2 w-full">
                    <p className="text-sm md:text-2xl text-[#F9DEC9] font-bold">AI-Img Genration</p>
                    <p className="text-xs md:text-xl text-rose-500 font-semibold">Generate Ai Images Free</p>
            </div>
            <Dropdown/>
        </div>
    )
}
export default Nav;