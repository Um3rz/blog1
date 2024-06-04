import { useEffect } from "react";
import { Avatar } from "./BlogCard"
import { Link,useNavigate } from "react-router-dom"
import { useAuth } from "../AuthContext"; // Import useAuth


export const Appbar = () => {
    const navigate = useNavigate();

    const { isAuthenticated, setIsAuthenticated } = useAuth();

    useEffect(() => {
      const token = localStorage.getItem('authToken'); 
      if (token) {
        setIsAuthenticated(true);
      }
    }, [setIsAuthenticated]);
    const handleSignOut = () => {
        localStorage.removeItem('authToken'); 
        setIsAuthenticated(false); 
        navigate("/")
      };


    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                Blog
        </Link>
        <div>
        {!isAuthenticated ? (
          <>
          <Link to={`/signup`}>
                <button type="button" className="mr-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Signup</button>
            </Link>
            <Link to={`/signin`}>
                <button type="button" className="mr-4 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Signin</button>
            </Link>
          </>
        ) : (
          <>
            <button type="button" onClick={handleSignOut} className="mr-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Signout</button>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Publish</button>
            </Link>
          </>
        )}
            <Avatar size={"big"} name={"Umz"} />
        </div>
    </div>
}