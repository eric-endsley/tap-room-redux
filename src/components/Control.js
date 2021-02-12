import React from 'react';
import KegList from './KegList';
import AddKegForm from './AddKegForm';
import { v4 } from 'uuid';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      selectedKeg: null,
      masterKegList: [
        {
          name: "Normal Beer",
          brand: "Normal Beer Brewing",
          price: 5,
          abv: 5.0,
          pints: 124,
          id: v4()
        }
      ]
    };
  }

  handleButtonClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingKeg = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    console.log(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddKegForm onNewKegAddition={this.handleAddingKeg} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} />
      buttonText = "Add New Keg";
    }

    return( 
      <React.Fragment>
         {currentlyVisibleState}
         <button onClick={this.handleButtonClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
export default KegControl;
