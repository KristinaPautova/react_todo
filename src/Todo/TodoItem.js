import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const style = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '.5rem',
  },
  input: {
    marginRight: '1rem',
  },

};

const TodoItem = function ({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);
  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }
  return (
    <li style={style.li}>
      <span className={classes.join(' ')}>

        <input
          type="checkbox"
          style={style.input}
          onChange={() => onChange(todo.id)}
          checked={todo.completed}
        />
        <strong>{index + 1}</strong>
            &nbsp;
        {todo.title}
      </span>

      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>&times;</button>
    </li>
  );
};

TodoItem.protoType = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func,
};

export default TodoItem;
