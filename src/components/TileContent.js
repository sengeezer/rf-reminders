import React from 'react';

const TileContent = props => (
  <div>
    {props.tileText}
    {(props.date).toString()}
  </div>
);

export default TileContent;
