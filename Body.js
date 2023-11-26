import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchtext, settext] = useState("");
  const [filterres, setfilterres] = useState([]);
  const [res, setres] = useState([]);
  const [err, seterr] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.28475216724439&lng=76.64010163396597&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const finalData = await response.json();

      const restaurants =
        finalData?.data.cards[2].card.card.gridElements.infoWithStyle
          .restaurants;

      if (restaurants) {
        setres(restaurants);
        setfilterres(restaurants);

        seterr("");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function filter() {
    const datanew = res.filter((x) => x.info.avgRating > 4.2);
seterr("")
    setfilterres(datanew);
  }
  function unfilter() {
    setfilterres(res);
    seterr("")
  }

  if (res.length === 0) {
    return <Shimmer />;
  }

  function filterdata() {
    let datas = res.filter((x) => {
      return x.info.name.toLowerCase().includes(searchtext.toLowerCase());
    });
    if (datas.length === 0) {
      seterr("No matching Restaurants Found");
    } else {
      seterr("");
      setfilterres(datas);
    }
  }

  return (
    <>
      <div className="Body">
     
        <div className="Search-Bar">
          <input
            type="text"
            value={searchtext}
            onChange={(e) => {
              var x = e.target.value;
              settext(x);
            }}
          ></input>
          <button className="btn btn-primary" onClick={filterdata}>Search</button>

          <button className="btn btn-dark" onClick={filter}>Top Rated Restaurants</button>
          <button className="btn btn-dark" onClick={unfilter}>All Restaurants</button>
        </div>
   <div className="unfound">
   <h4>{err}</h4>
   </div>
        <div className="Restaurants">
    
          {filterres.map((x) => {
            return (
              <Link
                className="res-link"
                key={x.info.id}
                to={"/res/" + x.info.id}
              >
                <Restaurant {...x} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
