import React from 'react';

const TileContent = props => (
  <div>
    {props.tileText}
    {(props.date).toString()}
    <button className="addReminder__button">+</button>
  </div>
);

export default TileContent;
