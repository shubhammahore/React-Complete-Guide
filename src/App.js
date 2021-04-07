//Understanding the Base Features & Syntax -Local
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Shubham", age: 25 },
    ],
    otherState: "some other value",
  };
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Shubham", age: 25 },
    ],
    otherState: "some other value",
  };
  switchNameHandler = () => {
    //console.log('Was clicked');
    //DON't DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: "Maximilian", age: 27 },
        { name: "Manu", age: 29 },
        { name: "Shubham", age: 25 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].name}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].name}
        ></Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
  }
}

export default App;

//React Hook approach to create class with states
// import React, { useState } from 'react';
// const app = (props) => {
//   const [personsState,setPersonsState] = useState({
//           persons:[
//             {name: 'Max', age: 28},
//             {name: 'Manu', age: 29},
//             {name: 'Shubham', age:25}
//           ]
//         }
//   );

// const [otherState,setOtherState]=useState('some other value');
// console.log(personsState,otherState);
// const switchNameHandler = () => {
//   //console.log('Was clicked');
//   //DON't DO THIS: this.state.persons[0].name = 'Maximilian';
//   setPersonsState(
//     {
//       persons:[
//         {name: 'Maximilian', age: 27},
//         {name: 'Manu', age: 29},
//         {name: 'Shubham', age:25}
//       ]
//     }
//   );
// };

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].name}>My Hobbies: Racing</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].name}></Person>

//       </div>
//     );
//     //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work now?'));
// }

// export default app;
