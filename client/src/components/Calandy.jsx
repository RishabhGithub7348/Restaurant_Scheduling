import React, { useState, useRef, useContext } from 'react';
import { useEffect } from 'react';
import SetCalander from './SetCalander';
import SetTime from './SetTime';
import { IoEarthSharp } from "react-icons/io5";
import SetTimezone from './SetTimezone';
import Form from './Form';
import { UserContext } from '../context/userContext';
import Details from './Details';


const Calandy = () => {
  const { country, setCountry, timezone, setTimezone, showCalendar, setShowCalendar, showForm, setShowForm } = useContext(UserContext);

  return (
    <div className='w-full h-5/6 bg-slate-200 p-3 flex items-center flex-col mt-1'>
      <div className='flex items-center'>
        <h1 className='font-bold text-black font-sans text-2xl'>Select a Date & Time</h1>
      </div>
      {!showForm ? (
          <>
      <div className='flex items-center flex-col  w-[720px] mt-5 bg-white rounded-lg border-2 p-2'>
        
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-3 mt-5'>
                <SetCalander />
              </div>
              <div className='col-span-3 mt-4'>
                <div>
                  <SetTime />
                </div>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex items-center justify-start ml-16'>
                <h1 className='text-lg font-bold'>Timezone</h1>
              </div>
              <div className='flex items-center p-2 bottom-2 rounded-md bg-slate-100'>
                <IoEarthSharp className='text-2xl cursor-pointer' />
                <SetTimezone />
              </div>
            </div>
            </div>
          </>
        ) : (
          <>
           <div className='flex items-center flex-col mt-4 w-[1020px] bg-white rounded-lg border-2 p-2'>
            <div className='grid grid-cols-6 gap-2'>
              <div className='col-span-3'>
               <Details/>
              </div>
              <div className='col-span-3'>
              <Form/>
              </div>
            </div>
           </div>
          </>
          
        )}
      
    </div>
  );
}

export default Calandy;
