import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg } = props;

  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h3>{keg.name} from {keg.brand}</h3>
      <h4>ABV: {keg.abv}% Price Per Pint: ${keg.price}</h4>
      <h4>Pints Left: {keg.pints}</h4>
      <button onClick={() => props.pourPint()}>Pour One Pint</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  pourPint: PropTypes.func
}

export default KegDetail;