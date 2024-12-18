import React from 'react'
import PropsTypes from "prop-types"

const PropsCard = ({logo, theH3, Spantext, address, course, job, time}) => {
  return (
    <div>
        <div className='w-[380px] h-[350px] border-[1px] border-slate-400 p-4 rounded-md flex flex-col items-center gap-2'>
            <div className='w-[100px] h-auto '>
               <img className='w-full h-full object-contain' src={logo} alt="" />
            </div>
            <h3 className='font-semibold text-2xl '>
                {theH3}
            </h3>
            <p className='text-gray-400'>Via <span className='text-orange-500 '>{Spantext}</span></p>

           <div className='flex w-full gap-1 justify-center'>
           <p>{address}</p>  
           <p>{course}</p>
           </div>
           <p className=' text-green-700 hover:text-orange-600 font-medium cursor-pointer'>{job}</p>
            {/* line */}
            
            <div className='w-full p-4 border-t-[1px] flex items-center justify-between'>
                <div className='text-gray-600'>{time}</div>
                <div className='w-[50px] h-[50px] rounded-[100%] p-3 border-[1px] border-gray-500'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropsCard

PropsCard.PropsTypes={
    logo: PropsTypes.string,
    // theH3: PropsTypes.string,
}