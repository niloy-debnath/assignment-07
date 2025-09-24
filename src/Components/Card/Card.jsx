import React from 'react';
import calendar from "../../assets/calendar.png"
import active from "../../assets/active.png"
import inprogress from "../../assets/inprogress.png"

const Card = ({elm}) => {
    return (
      <div className=''>
        <div className='shadow   p-4  rounded-xl'>
          <div className='flex justify-between'>
            <h1 className='font-bold text-xl'>{elm.title}</h1>
            <div className={`flex items-center gap-1 bg-[#B9F8CF] px-3 py-1 rounded-full ${elm.status == "Open"? "bg-[#02A53B]" : elm.status == "In-Progress" ? "bg-[#F8F3B9]" :""}`}>
              <img src={
      elm.status === "Open"
        ? active
        : elm.status === "In-Progress"
        ? inprogress
        : ""
    } alt="" />
              <p>{elm.status}</p>
            </div>
          </div>
          <p className="text-gray-500">{elm.description}</p>
          <div className='flex mt-6 justify-between'>
            <div className='flex gap-3 justify-between items-center'>
              <p>#{elm.id}</p>
              <p className={
  elm.priority == "High" 
    ? "text-[#F83044]" 
    : elm.priority == "Medium" 
      ? "text-[#FEBB0C]" 
      : elm.priority == "Low" 
        ? "text-[#02A53B]" 
        : ""
}>
  {elm.priority} Priority
</p>

            </div>
            <div className='flex  gap-5 justify-between'>
              <p>{elm.customer}</p>
              <div className='flex items-center gap-2'>
                <img src={calendar} alt="" />
                <p>{elm.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;