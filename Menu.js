import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Url from "./urls";
import Shimmer from "./Shimmer";
const Menu = () => {
  const [menu, setmenu] = useState("");
  const { id } = useParams();

  async function fetchmenu() {
    const data = await fetch(Url + id);
    const finaldata = await data.json();
    setmenu(finaldata);
    console.log(finaldata);
  }

  useEffect(() => {
    fetchmenu();
  }, []);

  if (menu.length === 0) {
    return <Shimmer />;
  }
  const styles = {
    width: "30rem",
  };
  return (
    <>
      <div className="res-cardss">
        <div className="card res-image-head " style={styles}>
          <img
            className="card-img-top"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              menu.data.cards[0].card.card.info.cloudinaryImageId
            }
            alt="Card image cap"
          />
          <div className="card-body res-name">
            <h5 className="card-title">
              Restaurant Name : {menu?.data?.cards[0]?.card?.card?.info?.name}
            </h5>
         
          </div>
        </div>

        <div className="card" style={styles}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h2>Menu</h2>
              {menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
                (x) => {
                  return (
                    <p>
                      {x?.card?.info?.name} Rs{" "}
                      {Math.ceil(x?.card?.info?.price / 100)}
                    </p>
                  );
                }
              )}
            </li>
          
          </ul>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                (x) => {
                  return (
                    <p>
                      {x?.card?.info?.name} Rs{" "}
                      {Math.ceil(x?.card?.info?.price / 100)}
                    </p>
                  );
                }
              )}
            </li>
          
          </ul>
         
        </div>
      </div>
    </>
  );
};

export default Menu;
