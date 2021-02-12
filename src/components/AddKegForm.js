import React from 'react';
import {v4} from 'uuid';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function AddKegForm(props) {

  function handleAddKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegAddition({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      abv: event.target.abv.value,
      pints: 124,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler = {handleAddKegFormSubmission} buttonText="Add Keg" />
    </React.Fragment>
  );
}

AddKegForm.propTypes = {
  onNewKegAddition: PropTypes.func
};

export default AddKegForm;