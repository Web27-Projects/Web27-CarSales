import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* 12. Add an onClick to run a function to remove a feature */}
      <button className="button" onClick= {() => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
