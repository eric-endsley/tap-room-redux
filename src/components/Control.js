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
  render(props) {
    return( 
      <React.Fragment>
        <KegList  kegList={this.state.masterKegList} />
      </React.Fragment>
    );
  }
}
export default KegControl;
