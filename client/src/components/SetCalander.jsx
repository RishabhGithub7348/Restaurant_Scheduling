import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const SetCalander = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const [currentDate, setCurrentDate] = useState(new Date());
    const originalMonthRef = useRef(currentDate.getMonth());
    const [originalMonth, setOriginalMonth] = useState(currentDate.getMonth());
    //  const { country, setCountry, timezone, setTimezone } = useContext(UserContext);
       
  
  const prevMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const getMonthName = () => {
    return currentDate.toLocaleString('default', { month: 'long' });
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const handleDateClick = (day) => {
    console.log(`Selected date: ${getMonthName()} ${day}`);
  };

  const shiftedWeekdays = [...weekdays.slice(getFirstDayOfMonth()), ...weekdays.slice(0, getFirstDayOfMonth())];
  return (
    <div>
        
        <div className='flex items-center justify-around gap-5'>
          <IoIosArrowBack className='text-2xl cursor-pointer' onClick={prevMonth} />
          <div>
            <h1 className='text-2xl w-[120px]'>{getMonthName()} {currentDate.getFullYear()}</h1>
          </div>
          <IoIosArrowForward className='text-2xl cursor-pointer' onClick={nextMonth} />
        </div>
        <div className='grid grid-cols-7 grid-rows-6 gap-2 mt-5 p-3 rounded-md  bg-white'>
          {shiftedWeekdays.map((day, index) => (
            <div className='flex items-center font-bold justify-center bg-white rounded-md p-2' key={index}>
              {day}
            </div>
          ))}
          {[...Array(getDaysInMonth())].map((_, index) => {
            const day = index + 1;
            const isFirstWeek = Math.floor((getFirstDayOfMonth() + index) / 7) === 0;
        const isLastWeek =
        Math.ceil((getFirstDayOfMonth() + index + 1) / 7) >
        Math.ceil((getFirstDayOfMonth() + getDaysInMonth()) / 7);
            const isWeekend = shiftedWeekdays[index % 7] === 'Sat' || shiftedWeekdays[index % 7] === 'Sun';
            const isCurrentDate = currentDate.getDate() === day && currentDate.getMonth() === new Date(currentDate.getFullYear(), new Date().getMonth(), 1).getMonth();
            const isDisabled = currentDate > new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isClickable = !isDisabled;
  return (
    <div
      className={`flex items-center justify-center rounded-md p-2 font-semibold  cursor-pointer ${
        isWeekend ? 'bg-gray-300' : 'bg-white'
      } ${isCurrentDate ? 'bg-blue-800 border rounded-md    text-white' : ''} ${isDisabled && !isCurrentDate ? 'opacity-50' : ''}`}
      key={day}
      onClick={isClickable ? () => handleDateClick(day) : null}

    >
      {day}
    </div>
  );
})}
        </div>  
        </div>
      
    
  )
}

export default SetCalander
