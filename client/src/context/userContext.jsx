import React, { createContext, useState, useEffect } from 'react';

const getTimezoneByCountry = (country) => {
  const timezoneMap = {
    'United States': 'America/New_York',
    'United Kingdom': 'Europe/London',
    'India': 'Asia/Kolkata',
    'Australia': 'Australia/Sydney',
    'Japan': 'Asia/Tokyo',
    // Add more country-timezone mappings as needed
  };

  return timezoneMap[country] || 'UTC';
};

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [country, setCountry] = useState('India');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [showCalendar, setShowCalendar] = useState(true);
  const [showForm, setShowForm] = useState(false);


  return (
    <UserContext.Provider
      value={{
        country,
        setCountry,
        timezone,
        setTimezone,
        showCalendar,
        setShowCalendar,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
