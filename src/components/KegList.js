import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg) =>
      <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        abv={keg.abv}
        id={keg.id}
        pints={keg.pints}
        whenKegClicked = { props.onKegSelection }/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;