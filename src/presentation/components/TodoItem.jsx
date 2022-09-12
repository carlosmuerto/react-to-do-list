import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

const TodoItem = ({
  id,
  title,
  completed,
  handleChangeProps,
  deleteTodoProps,
}) => (
  <li className={styles.item}>
    <input
      type="checkbox"
      className={styles.checkbox}
      checked={completed}
      onChange={() => handleChangeProps(id)}
    />
    <button type="button" onClick={() => deleteTodoProps(id)}>
      Delete
    </button>
    <span style={completed ? completedStyle : null}>
      {title}
    </span>
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
