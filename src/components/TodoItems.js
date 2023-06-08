import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/TodoItems.module.css';

const TodoItems = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>
    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
      />
      {itemProp.title}
      <button type="button" onClick={() => delTodo(itemProp.id)}> delete </button>
    </div>
  </li>
);
TodoItems.propTypes = {
  itemProp: PropTypes.shape(),
  handleChange: PropTypes.func,
  delTodo: PropTypes.string,
};
TodoItems.defaultProps = {
  itemProp: null,
  handleChange: null,
  delTodo: null,
};

export default TodoItems;
