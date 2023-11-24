import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header"; 
import Body from "./Body";

const App=()=>{
    return(<>
    <Header/>
     <Body/>

    </>)
}





ReactDOM.createRoot(document.getElementById('root')).render(<App/>)