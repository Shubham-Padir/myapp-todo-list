// import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos'
import AddTodo from './MyComponents/AddTodo'
import Footer from './MyComponents/Footer'
import About from './MyComponents/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  //  ,JSON.stringify(todos));
  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo)
    // let index = todos.indexOf(todo);
    // todo.splice(index, 1);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am addting this Todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // {
  //   sno: 1,
  //   title: "Go to the market",
  //   desc: "You need to go to the market to get this job done"
  // },
  // {
  //   sno: 2,
  //   title: "Lecture time",
  //   desc: "You have a javascript lectute at sharp 3pm"
  // },
  // {
  //   sno: 3,
  //   title: "Complete your project",
  //   desc: "Complete this project in time otherwise boss will get angry"
  // },



  return (
    <Router>
    <div>
   
      <Header title="MyTodosList" />
      
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
      <Routes>
        <Route path='/about' element={<About/>}/>
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
