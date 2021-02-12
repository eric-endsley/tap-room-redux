import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  const kegCardStyles = {
    border: 'solid',
    marginRight: '50%',
    marginBottom: '1rem'
  }
  return (
    <React.Fragment>
      <div style={kegCardStyles} onClick= {() => props.whenKegCardClicked(props.id)}>  
      <p>Name: {props.name}</p>
      <p>Brand: {props.brand}</p>
      <p>Price: {props.price}</p>
      <p>ABV: {props.abv}</p>
      <p>Pints Remaining: {props.pints}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;