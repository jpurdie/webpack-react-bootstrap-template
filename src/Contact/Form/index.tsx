import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
        />
        <div id='emailHelp' className='form-text'>
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputName' className='form-label'>
          Name
        </label>
        <input type='text' className='form-control' id='exampleInputName' />
      </div>
      <div className='mb-3 form-check'>
        <input type='checkbox' className='form-check-input' id='exampleCheck1' />
        <label className='form-check-label' htmlFor='exampleCheck1'>
          Check me out
        </label>
      </div>
      <button
        type='button'
        className='btn btn-primary mx-1'
        data-bs-toggle='popover'
        title='Popover title'
        data-bs-content="And here's some amazing content. It's very engaging. Right?"
      >
        Click to toggle popover
      </button>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
