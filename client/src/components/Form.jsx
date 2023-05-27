import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className='flex flex-col  w-[500px] bg-white rounded-lg  p-2'>
      <div className='border-2 h-full w-2 bg-blue-500'></div>

     
     <div className=''>
        <div className='flex items-center justify-start'>
        <p className='text-2xl font-bold opacity-70'>Enter Details</p>
      </div>
      <form className='flex flex-col mt-2 gap-2 w-full' onSubmit={handleSubmit}>
        <div>
          <p className='text-base font-semibold text-slate-600'>Name:</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-slate-100 p-2' type="text" placeholder='Enter your Name' />
        </div>
        <div>
          <p className='text-base font-semibold text-slate-600'>Email:</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-slate-100 p-2' type="email" placeholder='Enter your Email' />
        </div>
        <div>
          <p className='text-base font-semibold text-slate-600'>Telephone:</p>
        </div>
        <div className='flex items-center'>
          <input className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-slate-100 p-2' type="tel" placeholder='Enter your Telephone' />
        </div>
        <div>
          <p className='text-base font-semibold text-slate-600'>Number of Persons:</p>
        </div>
        <div className='flex items-center'>
          <select className='flex-1 outline-0 border-2 rounded-lg bg-slate-100 p-2'>
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
          </select>
        </div>
        <div>
          <p className='text-base font-semibold text-slate-600'>Message:</p>
        </div>
        <div className='flex items-center'>
          <textarea className='flex-1 items-center outline-0  focus:border focus:ring-2  focus:ring-blue-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg bg-slate-100 p-2' rows='4' placeholder='Enter your Message'></textarea>
        </div>
        <div className='flex items-center justify-start mt-3'>
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white w-2/5 ml-5 font-bold py-2 px-4 rounded-lg'>
          Submit
        </button>
        </div>
      </form>
    </div>
      </div>
  );
};

export default Form;
