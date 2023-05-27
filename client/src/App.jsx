import { useContext, useState } from 'react'
import Scheduler from './components/Schedule'
import Calendar from 'react-calendar'
import Calandy from './components/Calandy'
import SetTimezone from './components/SetTimezone'
import Time from './components/Time'
import { UserContext } from './context/userContext'





function App() {
  const [count, setCount] = useState(0)
  const { country, setCountry, timezone, 
    setTimezone , showCalendar,
    setShowCalendar,
    showForm,
    setShowForm, } = useContext(UserContext);

  return (
    <>
      <div className='flex flex-col h-screen w-full items-center '>
      <Calandy/>
      
     

      </div>
    </>
  )
}

export default App
