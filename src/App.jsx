
import './App.css'

function App() {
  


  return (
    <>
    <div className=" relative container  mt-5 self-center max-w-md sm:min-w-3/4  md:min-w-1/2 lg:min-w-2/3 max-xl:min-w-1/3" >
            <form className="bg-white shadow-md  rounded px-8 pt-6 pb-8 mb-4">
                <div className="lg:flex lg:items-center justify-center mb-4 ">
                <div className="mb-4 lg:w-1/4">
                  <label className="block text-gray-700 text-xl font-bold mb-2 md:text-center  md:mb-0  md:mr-1" >
                  Username
                  </label>
                 </div>
                 <div className="mb-4 lg:w-3/4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-red-500" id="username" type="text" placeholder="Username" />
                </div>
                </div>
                <div className="lg:flex lg:items-center justify-center lg:mb-4 ">
                <div className="mb-4 md:w-1/4 ">
                  <label className="block text-gray-700 text-xl font-bold mb-2 md:text-left  md:mb-0  md:mr-1" >
                  Password
                  </label>
                </div>
                <div className="mb-4 lg:w-3/4 lg:mt-1">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-red-500 " id="password" type="password" placeholder="*************" />
                 
                </div>
                </div>
                <div className="lg:flex lg:items-center mb-6">
                <div className="mb-4 lg:w-1/3"></div>
                <div className="mb-4 lg:w-3/4">
                <button className=" object-top px-7 py-4  border  text-lg leading-none  bg-red-300 rounded-3xl text-white  hover:bg-red-500 ">
                 Submit
                </button>
                </div>
                </div>
            </form>
            </div>
      
    </>
  )
}

export default App
