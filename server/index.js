import React, { useState } from 'react';
import moment from 'moment-timezone';

const getTimezoneByCountry = (country) => {
  const timezoneMap = {
    'United States': 'America/New_York',
    'United Kingdom': 'Europe/London',
    // Add more country-timezone mappings as needed
  };

  return timezoneMap[country] || 'UTC';
};

const SetTimezone = () => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedTimezone, setSelectedTimezone] = useState('');
  
    const handleCountryChange = (event) => {
      const country = event.target.value;
      const timezone = getTimezoneByCountry(country);
  
      setSelectedCountry(country);
      setSelectedTimezone(timezone);
    };
  
    return (
      <div>
        <label htmlFor="country">Choose a country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          {/* Add more country options as needed */}
        </select>
  
        {selectedCountry && (
          <p>
            Selected Country: {selectedCountry}
            <br />
            Timezone: {moment.tz(selectedTimezone).zoneAbbr()}
          </p>
        )}
      </div>
    );
  };

export default SetTimezone;
