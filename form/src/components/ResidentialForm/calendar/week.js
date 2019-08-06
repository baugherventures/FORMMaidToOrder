import React from 'react';
import Day from './day';

const Week = props => {
  console.log("week props", props)

    let days = [];
    let {
      date,
    } = props;
    
    const {
      month,
      selected,
      select,
    } = props;

    for (var i = 0; i < 7; i++) {
      let day = {
          name: date.format("dd").substring(0, 1),
          number: date.date(),
          isCurrentMonth: date.month() === month.month(),
          isToday: date.isSame(new Date(), "day"),
          date: date
      };
      days.push(
        <Day 
          key={i}
          day={day}
          selected={selected}
          select={select}
          days={props}/>
      );

      date = date.clone();
      date.add(1, "day");
    }

    return (
      <div className="row week" key={days[0]}>
        {days}
      </div>
    );
  
}

export default Week;