import { Link, NavLink } from "react-router"
import MainIcon from "../assets/MainIcon.svg"
import Button from "./Button"
import { useRef } from "react"
import SettingsDropdown from "../ComponentPages/SettingsDropdown"
import TheamButton from "../ComponentPages/TheamButton"
import NavSearch from "../ComponentPages/NavSearch"
import { useAuth } from "../Hooks/useAuth"
import LogoutButton from "../ComponentPages/LogoutButton"

const NavBar = () => {
  const { currentUser } = useAuth()
  const navbar = useRef(null)

  const NavStyle = ({ isActive, isPending, isTransitioning }) =>
    [
      isPending ? "pending" : "",
      isActive ? " text-[17px] text-red-600 border-[1px] border-red-600 pt-[2px] pb-[2px] leading-10 font-semibold shadow-sm border-b border-gray-200/50 " : " text-[17px] text-p leading-10 font-semibold ",
      isTransitioning ? "transitioning" : "",
    ].join(" ")
  

  window.addEventListener("scroll", ()=> {
    const value = window.scrollY
    if (value > 37) {
      navbar.current.classList.add("stickyNavbar")
    }else {
      navbar.current.classList.remove("stickyNavbar")
    }
  })
  
  const SocialMedia = currentUser?.providerData[0]?.providerId === "facebook.com" || currentUser?.providerData[0]?.providerId === "google.com" || currentUser?.providerData[0]?.providerId === "password"
  const Anonymou =  currentUser?.isAnonymous;
  
  return (
    <nav className=" z-50 fixed w-full " ref={navbar} >

  { !SocialMedia ? (<>
   
  </>) : (<>
       <div className="navbar container pt-[20px] pb-[20px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm shadow-border-b border-gray-200/50 ">
        <li> <NavLink className= {NavStyle}  to={"/desitnations"} >Desitnations</NavLink></li>
        <li>
          <NavLink className= {NavStyle}  to={"/hotels"} > Hotels </NavLink>
        </li>
        <li><NavLink className= {NavStyle}  to={"/flights"} >Flights</NavLink></li>
        <li> <NavLink className= {NavStyle}  to={"/bookings"} >Bookings</NavLink> </li>
      </ul>
    </div>
    <NavLink className=" text-[17px] text-p " to={"/"} > <img src={MainIcon} alt={MainIcon} /> </NavLink>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-[55px] ">
      <li> <NavLink className={NavStyle} to={"/desitnations"} >Desitnations</NavLink> </li>
      <li>
       <NavLink className={NavStyle} to={"/hotels"} > Hotels </NavLink>
      </li>
      <li><NavLink className={NavStyle} to={"/flights"} >Flights</NavLink></li>
      <li> <NavLink className={NavStyle} to={"/bookings"} >Bookings</NavLink> </li>
    </ul>
  </div>

  <div className="navbar-end flex items-center gap-[45px] ">
    <div className=" active:outline-none ">
      <NavSearch/>
    </div>

    <div className=" flex items-center gap-[20px] " >
    <button> <TheamButton/> </button>
    <button className=" z-40 " > <SettingsDropdown/> </button>
  </div>
  </div>

</div>
  </>) }

  { !Anonymou ? (<>
  </>) : (
  <>
  <div className="navbar space-x-15 container pt-[35px] pb-[22px] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className=" h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    </div>
    <NavLink className=" text-[17px] text-p " to={"/"} > <img src={MainIcon} alt={MainIcon} /> </NavLink>
  </div>

  <div className=" flex items-center justify-center gap-[20px] ml-[260px] " >
   <Link to={"/auth/login"} > <Button btnStyle="default"> Login </Button> </Link>
  <Link to={"/auth/signup"} ><Button btnStyle="secondery"> Sign Up </Button></Link>
 </div>

  <select defaultValue="Pick a font " className="select-ghost ml-[42px] outline-none text-[17px] font-bold ">
  
  <option >EN</option>
  <option >BN</option>
</select>
<button> <LogoutButton/> </button>

</div>
  </>
) }
      
  </nav>
  )
}

export default NavBar
