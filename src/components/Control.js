import React from 'react';
import KegList from './KegList';
import { v4 } from 'uuid';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      masterKegList: [
        {
          name: "Normal Beer",
          brand: "Normal Beer Brewing",
          price: 5,
          abv: 5.0,
          pints: 124,
          id: v4()
        }
      ],
      selectedKeg: null
    }
  }
  render() {
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegForm />
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
    }


    return( 
      <React.Fragment>
         {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
export default KegControl;
