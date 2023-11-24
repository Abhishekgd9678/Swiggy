import { useState } from "react";
import Restaurant from "./Restaurant"
import data from "./restaurantdata.json";
const Body=()=>{

    const [res,setres]=useState(data);

    function filter(){
        const data=res.filter((x)=>x.info.avgRating>4);
        setres(data);
    }
    function unfilter()
    {
        setres(data);
    }

    return (
        <>
            <div className="Body">
                <div className="Search-Bar">
                    <button onClick={filter}>Top Rated Restaurants</button>
                    <button onClick={unfilter}>All Restaurants</button>

                </div>
                    <div className="Restaurants">
                      {res.map((x)=>{
                        return (<Restaurant {...x} key={x.info.id}/>)
                      })}
             
                        
                        
                    </div>
                    </div>

        </>

    )
}
export default Body;