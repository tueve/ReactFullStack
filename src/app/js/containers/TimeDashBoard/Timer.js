import React from 'react';

const Timer = props => {
  const hh = Math.floor(props.timeEslapse / 3600);
  const mm = Math.floor((props.timeEslapse - hh * 3600) / 60);
  const ss = Math.floor((props.timeEslapse - hh * 3600 - mm * 60) / 60);
  return (
    <div className="col-3 timer">
      <h3 className="timer__title">Project title</h3>
      <h4 className="timer__subtitle">Subtitle</h4>
      <p className="timer__time">
        <span>60</span> :
        <span>60</span> :
        <span>60</span>
      </p>
      <span className="fa fa-remove" />
    </div>
  );
};

export default Timer;
