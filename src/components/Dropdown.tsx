import { useNavigate } from 'react-router-dom';
import guestLogo from '../assets/guest.svg'
import { googleLogout } from '@react-oauth/google';


function Dropdown(){

    const navigate = useNavigate();
    function HandleLogout(){
       setTimeout(()=>{
            googleLogout();
            localStorage.removeItem("token");
            
            navigate("/login");}
        ,1000);

    }

    return(
        <div className='block dropdown group relative'>
                <button tabIndex={0} className="group cursor-pointer w-20 h-10/12 ml-4 mb-2 mt-2 lg:mr-2 scale-75 rounded-2xl ">
                        <img src={guestLogo} alt="Profile" className="size-full transition duration-400 ease-in-out" />
                </button>
                <ul data-theme="abyss" tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Whatever</a></li>
                    <li><a>Profile</a></li>
                    <li><a onClick={HandleLogout}>Logout</a></li>
                 </ul>
        </div>
    );
}
export default Dropdown