import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header"; 
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const App=()=>{
    return(<>
    <Header/>
     <Body/>

    </>)
}

const Approuter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    }
    ,{
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={Approuter}/>)