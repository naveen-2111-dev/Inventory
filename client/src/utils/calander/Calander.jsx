import React, { useState, useEffect } from "react";

const Calander = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  useEffect(() => {
    createCalendarDays();
  }, [currentMonth]);

  const createCalendarDays = () => {
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );

    const startingDayOfWeek = firstDayOfMonth.getDay();

    const daysInMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const daysArray = Array.from(
      { length: startingDayOfWeek },
      (_, index) => null
    ).concat(Array.from({ length: daysInMonth }, (_, index) => index + 1));

    setCalendarDays(daysArray);
  };

  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
    setSelectedDate(null);
  };

  const handleButtonClick = (day) => {
    setSelectedDate(day);
  };

  const formattedMonth = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(currentMonth);

  return (
    <div className="calendar">
      <div className="calendar-content">
        <div className="month">
          <h2>{formattedMonth}</h2>
          <button onClick={prevMonth}>&lt;</button>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days">
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={
                day !== null
                  ? day === selectedDate
                    ? "today"
                    : "day"
                  : "empty-day"
              }
              onClick={() => handleButtonClick(day)}
            >
              {day !== null ? day : ""}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Calander;
