import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const TodoItem = ({
  id,
  title,
  completed,
  handleChangeProps,
  deleteTodoProps,
}) => (
  <li>
    <input
      type="checkbox"
      checked={completed}
      onChange={() => handleChangeProps(id)}
    />
    <button type="button" onClick={() => deleteTodoProps(id)}>
      Delete
    </button>
    {title}
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
