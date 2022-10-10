import React, { useState, useEffect } from 'react';
import './style.css';
import Home from './Home';

export default function App() {
  const [dataval, setDateval] = useState(0);

  useEffect(() => {
    const [a, b, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log('rest', rest);
  });

  const DateDifference = () => {
    const date1 = new Date('07/15/2015');
    const date2 = new Date('11/28/2016');

    //calculate time difference
    const time_difference = date2.getTime() - date1.getTime();

    //calculate days difference by dividing total milliseconds in a day
    const days_difference = time_difference / (1000 * 60 * 60 * 24);
    setDateval(days_difference);
  };

  return (
    <div>
      <p>Date diff : {dataval}</p>
      <button type="button" onClick={() => DateDifference()}>
        DateDifference
      </button>
    </div>
  );
}
