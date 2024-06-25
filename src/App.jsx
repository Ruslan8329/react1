// import React from "react";
// import UserProfile from "./components/UserProfile";
// import TodoList from "./components/TodoList";

// // const App = () => {
// //   return (
// //     <div className="App">
// //       <h1>User Profiles</h1>
// //       <UserProfile name="John Doe" age={30} location="New York" />
// //       <UserProfile name="Ruslan" age={20} location="Salamonustan" />
// //       <UserProfile name="Ramazan" age={35} location="Baku" />
// //     </div>
// //   );
// // };

// // export default App;

// const App = () => {
//   const user = {
//     name: "John Doe",
//     age: 30,
//     location: "New York",
//   };

//   const tasks = [
//     { text: "Buy groceries", completed: false },
//     { text: "Walk the dog", completed: true },
//     { text: "Do laundry", completed: false },
//   ];

//   return (
//     <div className="App">
//       <h1>User Profile and Todo List</h1>
//       <UserProfile name={user.name} age={user.age} location={user.location} />
//       <TodoList tasks={tasks} />
//     </div>
//   );
// };

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import UserProfile from "./components/UserProfile";
import TodoList from "./components/TodoList";
import Adder from "./components/Adder";

const tasks = [
  { text: "Buy groceries", completed: false },
  { text: "Walk the dog", completed: true },
];

const App = () => {
  return (
    <div>
      <UserProfile name="John Doe" age={30} location="New York" />
      <TodoList tasks={tasks} />
      <Adder num1={5} num2={10} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
