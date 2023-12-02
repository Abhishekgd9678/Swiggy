import React from 'react'

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
       {data.card.card.itemCards.map(x=>{return <h4 className="text-sm"><div className='flex justify-between' >
        <div>{x.card.info.name}</div><div>{Math.round(x.card.info.price/100)}</div></div></h4>})}
       </div>
       
    </div>
    </>
  )
}

export default ResSection;