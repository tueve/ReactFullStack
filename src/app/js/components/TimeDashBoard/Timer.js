import React from 'react';

const Timer = ({ name, id, subtitle, toggle }) => {
  let timeEslapse = 4000;
  const hh = Math.floor(timeEslapse / 3600);
  const mm = Math.floor((timeEslapse - hh * 3600) / 60);
  const ss = Math.floor((timeEslapse - hh * 3600 - mm * 60) / 60);

  return (
    <div>
      <h3 className="timer__title">{name}</h3>
      <h4 className="timer__subtitle">{subtitle}</h4>
      <p className="timer__time">
        <span className="timer__time-content">60</span> :
        <span className="timer__time-content">60</span> :
        <span className="timer__time-content">60</span>
      </p>
      <div className="timer__control">
        <button className="fa fa-remove" />
        <button className="fa fa-edit" onClick={() => toggle()} />
      </div>
      <div className="timer__manage">
        <button className="col-12 fa fa-start">START</button>
      </div>
    </div>
  );
};

export default Timer;
