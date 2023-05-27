import React from 'react';
import moment from 'moment';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

class Calendar extends React.Component {
  constructor() {
    super();
    this.state = {
      currentDate: moment(),
    };
  }

  prevMonth = () => {
    this.setState({
      currentDate: this.state.currentDate.clone().subtract(1, 'month'),
    });
  };

  nextMonth = () => {
    this.setState({
      currentDate: this.state.currentDate.clone().add(1, 'month'),
    });
  };

  render() {
    const { currentDate } = this.state;
    const startOfMonth = currentDate.clone().startOf('month');
    const endOfMonth = currentDate.clone().endOf('month');
    const monthDays = [];

    const startDate = startOfMonth.clone().startOf('week').subtract(1, 'day');
    while (startDate.isBefore(endOfMonth, 'day')) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const date = startDate.add(1, 'day').clone();
        const isCurrentMonth = date.isSame(startOfMonth, 'month');
        const shouldRenderDate =
          isCurrentMonth &&
          date.date() <= endOfMonth.date() &&
          (date.month() !== 1 || date.date() <= 29) &&
          (date.month() !== 3 ||
            date.date() <= 30 ||
            (date.date() === 30 && endOfMonth.date() === 30));

        const dayClass = isCurrentMonth ? 'day block text-center rounded-full p-2' : 'day block text-center rounded-full p-2 text-gray-500';
        const dateText = shouldRenderDate ? date.format('D') : '';
        week.push(
          <td key={date.format('D')} className="py-2">
            <span className={dayClass}>{dateText}</span>
          </td>
        );
      }
      monthDays.push(week);
    }

    return (
        <div className="calendar bg-gray-100 rounded-lg shadow-md p-4">
        <header className="calendar-header flex justify-between items-center">
          <FaChevronLeft className="nav-icon cursor-pointer text-gray-500" onClick={this.prevMonth} />
          <h2 className="text-xl font-semibold">{currentDate.format('MMMM YYYY')}</h2>
          <FaChevronRight className="nav-icon cursor-pointer text-gray-500" onClick={this.nextMonth} />
        </header>
        <table className="calendar-table w-full mt-4">
          <thead>
            <tr>
              {moment.weekdaysShort().map((day) => (
                <th key={day} className="py-2 bg-gray-800 text-white">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthDays.map((week, index) => (
              <tr key={index}>
                {week.map((day) => (
                  <td key={day.date.format('D')} className="py-2">
                    {day.shouldRenderDate ? (
                      <span className="day block text-center rounded-full p-2 bg-blue-500 text-white">{day.date.format('D')}</span>
                    ) : (
                      <span className="day block text-center rounded-full p-2">&nbsp;</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Calendar;
