import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todos = [
    { id: 't1', text: 'Finish Project' }
  ];

  return (
    <div className="App">
      <h1>React TS - App</h1>
      <TodoList items={todos} />
    </div>
  );
}

export default App;
