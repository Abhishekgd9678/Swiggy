const Card=()=>
{
    styles={
        width:"16rem",
        height:"20rem"
    }
    return(
<>
<div className="shimmer-card">
<div className="card" style={styles}>
  <img className="card-img-top" src="https://media.tarkett-image.com/large/TH_24567080_24594080_24596080_24601080_24563080_24565080_24588080_001.jpg" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title"></h5>
    <p className="card-text"></p>
  </div>
  <ul className="list-group list-group-flush">
  <p class="card-text placeholder-glow">
      <span class="placeholder col-7"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-4"></span>
      <span class="placeholder col-6"></span>
      <span class="placeholder col-8"></span>
    </p>
  </ul>

</div>
</div>



</>


    )
}
export default Card;