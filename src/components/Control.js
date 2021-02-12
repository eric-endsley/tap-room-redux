import React from 'react';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      masterKegList: [],
      selectedKeg: null
    }
  }
  
  return( 
    <React.Fragment>
      <h1>Control goes here</h1>
    </React.Fragment>
  );
}

export default KegControl;
