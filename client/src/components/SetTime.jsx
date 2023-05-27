import React, { useState, useRef, useContext } from 'react';
import { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { UserContext } from '../context/userContext';
import moment from 'moment-timezone';






const SetTime = () => {
    // const [selectedTimezone, setSelectedTimezone] = useState('Asia/Kolkata'); // Default timezone
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [box2Time, setBox2Time] = useState('10:30 AM');
  const [box3Time, setBox3Time] = useState('11:00 AM');
  const [box4Time, setBox4Time] = useState('11:30 AM');
  const { country, setCountry, timezone, 
    setTimezone , showCalendar,
    setShowCalendar,
    showForm,
    setShowForm, } = useContext(UserContext);
  const [expandedBox, setExpandedBox] = useState(null);
//   const [timezone, setTimezone] = useState('America/New_York');

  const handleTimeDown = () => {
    const timeParts = selectedTime.split(' ');
    const [hour, minutes] = timeParts[0].split(':');
    const period = timeParts[1];
  
    let newHour = parseInt(hour, 10);
    let newMinutes = parseInt(minutes, 10);
    let newPeriod = period;
  
    newMinutes += 30; // Increase the minutes by 30
  
    if (newMinutes >= 60) {
      // Handle hour adjustment when minutes exceed 60
      newHour += Math.floor(newMinutes / 60);
      newMinutes %= 60;
    }
  
    if (newHour === 12) {
      // Handle the transition between AM and PM
      newPeriod = period === 'AM' ? 'PM' : 'AM';
    } else if (newHour > 12) {
      // Adjust the hour when it exceeds 12
      newHour %= 12;
      newPeriod = period === 'AM' ? 'PM' : 'AM';
    }
  
    const newTime = `${newHour}:${newMinutes.toString().padStart(2, '0')} ${newPeriod}`;
    setSelectedTime(newTime);

    const box2NewMinutes = newMinutes + 30;
    const box2NewHour = newHour + Math.floor(box2NewMinutes / 60);
    const box2NewPeriod = newPeriod;
    const box2NewTime = `${box2NewHour % 12}:${(box2NewMinutes % 60).toString().padStart(2, '0')} ${box2NewPeriod}`;
    setBox2Time(box2NewTime);
  
 
  
    const box3NewMinutes = box2NewMinutes + 30;
    const box3NewHour = newHour + Math.floor(box3NewMinutes / 60);
    const box3NewPeriod = newPeriod;
    const box3NewTime = `${box3NewHour % 12}:${(box3NewMinutes % 60).toString().padStart(2, '0')} ${box3NewPeriod}`;
    setBox3Time(box3NewTime);
  
    const box4NewMinutes = box3NewMinutes + 30;
    const box4NewHour = box3NewHour + Math.floor(box4NewMinutes / 60);
    const box4NewPeriod = newPeriod;
    const box4NewTime = `${box4NewHour % 12}:${(box4NewMinutes % 60).toString().padStart(2, '0')} ${box4NewPeriod}`;
    setBox4Time(box4NewTime);
  };


   
  const handleTimeUp = () => {
    const timeParts = selectedTime.split(' ');
    const [hour, minutes] = timeParts[0].split(':');
    const period = timeParts[1];
  
    let newHour = parseInt(hour, 10);
    let newMinutes = parseInt(minutes, 10);
    let newPeriod = period;
  
    newMinutes -= 30; // Decrease the minutes by 30
  
    if (newMinutes < 0) {
      // Handle hour adjustment when minutes go below 0
      newHour -= 1;
      newMinutes += 60;
    }
  
    if (newHour < 1) {
      // Handle the transition between AM and PM
      newHour = 12;
      newPeriod = period === 'AM' ? 'PM' : 'AM';
    } else if (newHour === 12) {
      // Adjust the hour when it becomes 12
      newPeriod = period === 'AM' ? 'PM' : 'AM';
    }
  
    const newTime = `${newHour}:${newMinutes.toString().padStart(2, '0')} ${newPeriod}`;
    setSelectedTime(newTime);

    const box2NewMinutes = newMinutes - 30;
    const box2NewHour = newHour - Math.floor(box2NewMinutes / 60);
    const box2NewPeriod = newPeriod;
    const box2NewTime = `${box2NewHour % 12}:${(box2NewMinutes % 60).toString().padStart(2, '0')} ${box2NewPeriod}`;
    setBox3Time(box2NewTime);

  
    const box3NewMinutes = box2NewMinutes - 30;
    const box3NewHour = newHour - Math.floor(box3NewMinutes / 60);
    const box3NewPeriod = newPeriod;
    const box3NewTime = `${box3NewHour % 12}:${(box3NewMinutes % 60).toString().padStart(2, '0')} ${box3NewPeriod}`;
    setBox3Time(box3NewTime);
  
    const box4NewMinutes = box3NewMinutes - 30;
    const box4NewHour = box3NewHour - Math.floor(box4NewMinutes / 60);
    const box4NewPeriod = newPeriod;
    const box4NewTime = `${box4NewHour % 12}:${(box4NewMinutes % 60).toString().padStart(2, '0')} ${box4NewPeriod}`;
    setBox4Time(box4NewTime);
  };

  useEffect(() => {
    const currentTime = moment(selectedTime, 'hh:mm A').tz(timezone).format('hh:mm A');
    const box2ConvertedTime = moment(box2Time, 'hh:mm A').tz(timezone).format('hh:mm A');
    const box3ConvertedTime = moment(box3Time, 'hh:mm A').tz(timezone).format('hh:mm A');
    const box4ConvertedTime = moment(box4Time, 'hh:mm A').tz(timezone).format('hh:mm A');

    setSelectedTime(currentTime);
    setBox2Time(box2ConvertedTime);
    setBox3Time(box3ConvertedTime);
    setBox4Time(box4ConvertedTime);
  }, [ timezone]);

  const handleBoxClick = (boxTime) => {
    setExpandedBox(boxTime);
  };

  const handleNextButtonClick = () => {
    // Show the form and hide the calendar
    setShowForm(true);
  };

  const renderBox = (time) => {
    if (time === expandedBox) {
      return (
        <div className='grid grid-cols-4 gap-4 '>
          <div className='col-span-2'>
            <div className="flex items-center text-center flex-col text-xl w-[120px] bg-blue-900 text-white font-bold rounded-md border-2 p-2">
              {time}
            </div>
          </div>
          <div className='col-span-2'>
            <div className="flex items-center text-center flex-col text-xl w-[120px] bg-black  text-white font-bold rounded-md border-2 p-2" onClick={handleNextButtonClick}>
              Next
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-center flex-col text-xl w-[250px] border-blue-300 text-blue-600 font-bold rounded-md border-2 p-2 cursor-pointer hover:bg-blue-200" onClick={() => handleBoxClick(time)}>
          {time}
        </div>
      );
    }
  };
  

  return (
    <div>
      
          <div className='flex flex-col items-center gap-3 '>
            <div className='flex items-center text-center  flex-col text-xl w-[320px] p-2'>
              Friday, May 26
            </div>
            <IoIosArrowUp className='text-2xl cursor-pointer' onClick={handleTimeUp} />
            {renderBox(selectedTime)}
            {renderBox(box2Time)}
            {renderBox(box3Time)}
             {renderBox(box4Time)}
            <IoIosArrowDown className='text-2xl cursor-pointer' onClick={handleTimeDown} />
          </div>
        </div>
    
  )
}

export default SetTime

