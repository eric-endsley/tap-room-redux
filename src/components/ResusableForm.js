import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' />
        <input
          type='text'
          name='brand'
          placeholder='Beer Brand' />

        <input
          type='number'
          name='price'
          placeholder='Beer Price per Pint' />
        <input
          type='number'
          name='abv'
          placeholder='Beer ABV' />      
        <button type='submit'>Help!</button>
      </form>
      <button type='submit'>{props.buttonText}</button>
    </React.Fragment>
  )
}

  ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};