import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Beer Name' 
          required />
        <input
          type='text'
          name='brand'
          placeholder='Beer Brand' 
          required/>

        <input
          type='number'
          name='price'
          placeholder='Beer Price per Pint'
          required />
        <input
          type='number'
          name='abv'
          placeholder='Beer ABV'
          required />      
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  )
}

  ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;