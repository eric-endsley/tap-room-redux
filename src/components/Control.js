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
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id]
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
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />
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
  formVisibleOnPage: PropTypes.bool,
  masterKegList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage,
    masterKegList: state.masterKegList
  }
}


KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;
