import React from 'react'
import Url from './urls';
import { MenuUrl } from './urls';

const ResSection=({data}) =>{

  return (

<>
   
    <div className="w-[40rem] border  m-auto">
        <div className="flex justify-between m-2">
            <div >
            <h4 className="font-serif my-4">{data.card.card.title}</h4> 
            </div>
     <div className='my-4'>⬇️</div>
        </div>

       <div className='body m-2 p-2 bg-slate-200'>
       {data.card.card.itemCards.map((x,index)=>{{console.log(x)}return <h4 key={index} className="text-sm"><div className='flex justify-between' >
        <div className="font-bold text-lg">{x.card.info.name}<h5>{Math.round(x.card.info.price/100)}</h5></div><div className='menu-image'><img className="w-40" src={MenuUrl+x.card.info.imageId}/></div></div></h4>})}
       </div>
       
    </div>
    </>
  )
}

export default ResSection;