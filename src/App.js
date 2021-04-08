//Understanding the Base Features & Syntax -Local
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  state={
    userName:"SuperMax"
  }
  userNameChangeHandler = (event) =>{
    this.setState({userName:event.target.value});
  }
  // state = {
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Manu", age: 29 },
  //     { name: "Shubham", age: 25 },
  //   ],
  //   otherState: "some other value",
  // };
  // state = {
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Manu", age: 29 },
  //     { name: "Shubham", age: 25 },
  //   ],
  //   otherState: "some other value",
  // };
  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked');
  //   //DON't DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 27 },
  //       { name: "Manu", age: 29 },
  //       { name: "Shubham", age: 25 },
  //     ],
  //   });
  // };
  // nameChangedHandler = (event) =>
  // {
  //   this.setState({
  //     persons: [
  //       { name: 'Max', age: 27 },
  //       { name: event.target.value, age: 29 },
  //       { name: "Shubham", age: 25 },
  //     ],
  //   });
  // }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <UserInput  
        changed={this.userNameChangeHandler}
        currentName={this.state.userName}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName="Shubham"></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
        
        {/* <button 
        style={style}
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        ></Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Maximilian')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        ></Person> */}
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
