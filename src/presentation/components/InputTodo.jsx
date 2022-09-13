import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

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
    <form onSubmit={onSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add Todo..."
        name="title"
        value={title}
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default InputTodo;
