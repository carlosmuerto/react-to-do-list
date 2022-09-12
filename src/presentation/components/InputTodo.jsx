import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      handleSubmit(title);
      setTitle('');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add Todo..." name="title" value={title} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default InputTodo;
