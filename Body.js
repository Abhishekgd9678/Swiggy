import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"
import data from "./restaurantdata.json";
const Body=()=>
{

    const [res,setres]=useState(data);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.28475216724439&lng=76.64010163396597");
            const finalData = await response.json();
            const restaurants = finalData?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            if (restaurants) {
                setres(restaurants);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

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