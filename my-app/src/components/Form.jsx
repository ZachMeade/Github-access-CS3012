import React from 'react';
const Form = (props) => {
  return (
<form onSubmit={(event) => props.handleUserFormSubmit(event)}>
      <label className = "bounce-in-top">
        <input name="username"
        type="text"
        placeholder="GitHub username"
        required
        value={props.formData.username}
        onChange={props.handleFormChange}
      />
      <a>  </a>
      <input
        type="submit"
        value="Submit"
      />
      </label>
      <div>
    </div>
    </form>
)};
export default Form;
