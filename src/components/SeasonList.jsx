import React from 'react';
import Schedule from './Schedule';

var masterSeasonList = [
  {
    season: 'Spring',
    place: 'Federal Way',
    time: '9 am - 5pm'
  },
  {
    season: 'Summer',
    place: 'Seattle',
    time: '7 am - 4pm',
  },
  {
    season: 'Fall',
    place: 'Lynnwood',
    time: '11 am - 5pm',
  },
  {
    season: 'Winter',
    place: 'Kent',
    time: '11 am - 4pm',
  },
  
    

];

function SeasonList(){
  return (
    <div>
      {masterSeasonList.map((schedule, index) =>
        <Schedule  season={schedule.season}
          place={schedule.place}
          time={schedule.time}
          key={index}/>
      )}
    </div>
    ) 
  }

export default SeasonList;
