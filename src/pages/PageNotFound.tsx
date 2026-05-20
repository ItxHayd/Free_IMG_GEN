import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <>
        <div className="flex min-h-screen bg-linear-to-br from-purple-950 via-purple-900 to-purple-800 flex-col items-center justify-center h-screen">
            <p className="[text-shadow:2px_1px_12px_black] font-bold text-4xl md:text-5xl tracking-wide bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 bg-clip-text">PageNotFound</p>
            <Link to="/home">
                <button className="w-full p-3 rounded-lg bg-linear-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-semibold transition duration-300 shadow-lg shadow-purple-900/40 cursor-pointer active:scale-90 mt-13 hover:shadow-lg  hover:shadow-purple-900  border-purple-500 ">
                    Go to Home
                </button>
            </Link>
        </div>
    </>
  )
}

export default PageNotFound