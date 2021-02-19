import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegCardStyles = {
    border: 'solid',
    margin: 'auto',
    width: '50%'
  }
  return (
    <React.Fragment>
      <div style={kegCardStyles} onClick= {() => props.whenKegCardClicked(props.id)}>  
        <p>Name: {props.name}</p>
        <p>Brand: {props.brand}</p>
        <p>Price: ${props.price}</p>
        <p>ABV: {props.abv}%</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;