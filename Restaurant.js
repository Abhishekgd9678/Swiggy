

const Restaurant=(props)=>
{ 

const{name,areaName,cuisines,avgRating,costForTwo,id}= props.info;
  
const styles={
    width: "18rem"
}

    return (
        <>
        <div className="card res-card" style={styles}>
        <img className="card-img-top" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+props.info.cloudinaryImageId} alt="Card image cap"/>
        <div className="card-body">
        <h5 className="card-title">Name:{name}</h5>
        <p className="card-text">Rating:{avgRating}</p>

  </div>
</div>
        
    </>
    )
}

export default Restaurant;