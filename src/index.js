import React from 'react';
import ReactDOM from 'react-dom';


const TodoList =()=> {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome</li>
    </ul>
  )
}
const AppHeader = () => {
  return <h1>My Todo List</h1>
}
const SeacrhPanel = () => {
  return <input placeholder='search'/>
}
const App = () => {
  return (
    <div>
      <AppHeader/>
      <TodoList/>
      <SeacrhPanel/>
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

