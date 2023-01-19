import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'Finish Project' }
  ];

  const todoAddHandler = (text: string) => {
    console.log(text);
  }

  return (
    <div className="App">
      <h1>React TS - App</h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
