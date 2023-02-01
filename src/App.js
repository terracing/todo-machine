import React from 'react';

import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

import './App.css';

const todos = [
  {text: 'Revisar API', completed: false},
  {text: 'Completar curso de introducción a React', completed: false}
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}      
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
