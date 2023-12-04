import React, { useState } from "react";
import Url from "./urls";
import { MenuUrl } from "./urls";

const ResSection = ({ data }) => {
  const [show, setshow] = useState(false);

  const handleclick = () => {
    setshow(!show);
  };
  return (
    <>
      <div className="w-[50rem] border  m-auto">
        <div className="flex justify-between m-2">
          <div>
            <h4 onClick={handleclick}className="cursor-pointer font-serif my-4">{data.card.card.title}</h4>
          </div>
          <div className="my-4"> ⬇️ </div>
        </div>
        

        <div className="body m-2 p-2 bg-slate-200">
          {data.card.card.itemCards.map((x, index) => {
            return ( show &&
              <h4 key={index} className="text-sm">
                <hr class="border border-black border-1 opacity-75" />
                <div className="flex justify-between">
                  <div className="font-bold text-lg">
                    {x.card.info.name}
                    <h5>{Math.round(x.card.info.price / 100)}</h5>
                    <button className="btn btn-primary">Add +</button>
                  </div>
                  <div className="menu-image">
                    <img className="w-40" src={MenuUrl + x.card.info.imageId} />
                  </div>
                </div>
              </h4>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResSection;
