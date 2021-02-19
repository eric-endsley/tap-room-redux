import React from 'react';
import KegList from './KegList';
import AddKegForm from './AddKegForm';
import KegDetail from './KegDetail';
import PropTypes from 'prop-types';
import * as a from '../actions/index';
import { connect } from 'react-redux';

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      })
    } else {
     const { dispatch } = this.props;
     const action = a.toggleForm();
     dispatch(action);
    }
  }

  handleAddingKeg = (newKeg) => {
    const { dispatch } = this.props;
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
    });
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handlePouringPint = () => {
    const newKeg = this.state.selectedKeg;
    const { pints } = newKeg;
    if (pints > 0 ) {
      newKeg.pints = pints - 1;
    }
    this.setState({selectedKeg: newKeg});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg!= null) {
      currentlyVisibleState = 
      <KegDetail keg = {this.state.selectedKeg} pourPint = {this.handlePouringPint} />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <AddKegForm onNewKegAddition={this.handleAddingKeg} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add New Keg";
    }

    const mainButtonStyles = {
      margin: 'auto',
      width: '50%',
      marginTop: '2rem'
    }

    return( 
      <React.Fragment>
         {currentlyVisibleState}
         <div style={mainButtonStyles} onClick={this.handleButtonClick}>
          <button >{buttonText}</button>
         </div>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}


KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;
