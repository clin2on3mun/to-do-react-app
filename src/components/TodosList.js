import PropTypes from 'prop-types';
import React from 'react';
import TodoItems from './TodoItems';

const TodosList = ({ todosProps, handleChange, delTodo }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItems
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);
TodosList.propTypes = {
  todosProps: PropTypes.shape(),
  handleChange: PropTypes.func,
  delTodo: PropTypes.string,
};
TodosList.defaultProps = {
  todosProps: null,
  handleChange: null,
  delTodo: null,
};

export default TodosList;
