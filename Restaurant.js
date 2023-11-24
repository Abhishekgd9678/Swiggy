


const Restaurant=(props)=>
{ 

const{name,areaName,cuisines,avgRating,costForTwo,id}= props.info;
  

    return (
        <>
        
        <div className="res-card " >
           <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.info.cloudinaryImageId}/>
            <h3>Name:{name}</h3>
            <h3>Locality:{areaName}</h3>
            <h3>Cuisines:{cuisines.join(" , ")}</h3>
            <h3>Rating:{avgRating}</h3>
            <h3>Rs {costForTwo}</h3>
        </div>
        </>
    )
}

export default Restaurant;