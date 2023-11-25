import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Url from "./urls";
import Shimmer from "./Shimmer";
const Menu=()=> {

const [menu,setmenu]=useState("");
const {id}=useParams();



    async function fetchmenu(){
            const data=await fetch(Url+id);
            const finaldata = await data.json();
            setmenu(finaldata)
            console.log(finaldata)

      
            
    }

    useEffect(() => {
        fetchmenu();
      }, []);

if(menu.length===0)
{
    return <Shimmer/>
}


  return (
    <div><h1>Restaurant Name : {menu?.data?.cards[0]?.card?.card?.info?.name}</h1>
    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+menu.data.cards[0].card.card.info.cloudinaryImageId}/>
    <ul>
    {menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((x)=>{
        return(
            <li>{x?.card?.info?.name }  <br/> {x?.card?.info?.price/100}       </li>
        )
    })}
    </ul>
    </div>
  )
}

export default Menu