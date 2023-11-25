
import { useEffect, useState } from "react";
import Restaurant from "./Restaurant"
import  Shimmer from "./Shimmer"

const Body=()=>
{
    const [searchtext,settext]=useState("");
    const [res,setres]=useState([]);
    const [err,seterr]=useState("");
    useEffect(()=>{ 
        fetchData();
    },[]);

 
    
    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.28475216724439&lng=76.64010163396597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const finalData = await response.json();
           
            const restaurants = finalData?.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
            if (restaurants) {
                setres(restaurants);
           
            }
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }
        seterr("")
        
    };

    function filter(){
        const datanew=res.filter((x)=>x.info.avgRating>4);
       
  
   
            setres(datanew);
        
       
    }
    function unfilter()
    {
        fetchData();
    
    }
    if(res.length===0){
        return <Shimmer/>
    }
    function filterdata(){
        let datas=res.filter((x)=>{return (x.info.name.includes(searchtext)) })
       if(datas.length===0)
       {
        seterr("No matching Restaurants Found");
       }
       else{
        seterr("");
        setres(datas)
       }
       
    }
   

    return (
        <>
            <div className="Body">
                <div className="Search-Bar">
                    <input type="text" onChange={(e)=>{var x=e.target.value;
                    settext(x)}} ></input>
                    <button onClick={filterdata}>Search</button> 


                    <button onClick={filter}>Top Rated Restaurants</button>
                    <button onClick={unfilter}>All Restaurants</button>

                </div>
                <h4>{err}</h4>
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