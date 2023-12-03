import { useParams } from "react-router-dom";
import ResSection from "./ResSections.js";
import useResMenu from "../utils/useResMenu";
import Shimmer from "./Shimmer";
const Menu = () => {
  const { id } = useParams();

  const menu = useResMenu(id);

  if (menu.length === 0) {
    return <Shimmer />;
  }
  const cat=(menu?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR.cards.filter(r=>r.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
  const name=(menu.data.cards[0].card.card.info.name);
  const rating=(menu.data.cards[0].card.card.info.avgRating)
  const rate=(menu.data.cards[0].card.card.info.costForTwo/100)


console.log(menu);

  return(
    <>
    <div className="m-4 text-center">
    <h2>{name}</h2>
    <h3>{rating}⭐</h3>
    <h5>{rate} For Two</h5>
    </div>
    <div>
      {cat.map((x,index)=>{return <ResSection key={index} data={x} />})}
    </div>
    </>
  ) ;



};

export default Menu;
