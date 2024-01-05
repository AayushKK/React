import {url} from "./constants/datafile.js"

const Navbar = () => {
  return (
   
    <nav >
        <div className="relative container mx-0 my-0 p-6 ">
            <div className="flex items-center justify-between">
               
                <div className=" pt-2" >
                    <img src={url[0]}  height="25%" width="25%" alt="logo" />
                </div>
               
                <div className="hidden md:flex space-x-6 p-[20px] ">
                    <a href="/" className="text-blue-500 font-bold text-2xl   hover:text-red-500" >Home</a>
                    <a href="/" className="text-blue-500 font-bold text-2xl  hover:text-red-500" >About Us</a>
                    <a href="/" className="text-blue-500 font-bold text-2xl  hover:text-red-500" >Department</a>
                    <a href="/" className="text-blue-500 font-bold text-2xl  hover:text-red-500" >Programs offered</a>
                    <a href="/" className="text-blue-500 font-bold text-2xl  hover:text-red-500" >Contact Us</a>
                </div>
                <div>
                <a href="#" className="hidden md:block p-3 px-3 pt-6 text-white bg-blue-300 rounded-full baseline hover:bg-blue-500" >
                    Button
                </a>
                 </div>
            </div>
        </div>
    </nav>    
   
  )
}

export default Navbar