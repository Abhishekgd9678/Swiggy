import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import Offlinepage from "./offlinepage";



const Body = () => {
  const onlinestatus=useOnlineStatus();
  const [searchtext, settext] = useState("");
  const [filterres, setfilterres] = useState([]);
  const [res, setres] = useState([]);
  const [err, seterr] = useState("");
  const [sty, setsty] = useState("btn-dark");
  const[sty2,setsty2]=useState("btn-dark")
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
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      filterdata();
    }
  };
  function filter() {
    const datanew = res.filter((x) => x.info.avgRating > 4.2);
    seterr("");
    setfilterres(datanew);
    if (sty === "btn-dark") {
      setsty("btn-warning");
    }
    setsty2("btn-dark")
  }
  function unfilter() {
    setsty("btn-dark")
    setsty2("btn-warning");
    setfilterres(res);
    seterr("");
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


  if(!onlinestatus)
  {
    return(
      <Offlinepage/>
    )
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
            onKeyPress={handleKeyPress}
          ></input>

          <button className="btn btn-outline-dark" onClick={filterdata}>
            Search
          </button>
       
          <button className={"btn " + sty} onClick={filter}>
            Top Rated Restaurants
          </button>
          <button className={"btn "+sty2} onClick={unfilter}>
            All Restaurants
          </button>
         
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
