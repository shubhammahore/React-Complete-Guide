//Understanding the Base Features & Syntax -Local
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
//import UserInput from "./UserInput/UserInput";
//import UserOutput from "./UserOutput/UserOutput";
class App extends Component {
  // state={
  //   userName:"SuperMax"
  // }
  // userNameChangeHandler = (event) =>{
  //   this.setState({userName:event.target.value});
  // }
  
  state = {
    persons: [
      { id:'asjbs',name: "Max", age: 28 },
      { id:'fjdsfjhef',name: "Manu", age: 29 },
      { id:'jdncdcn',name: "Shubham", age: 25 }
    ],
    otherState: "some other value",
    showPersons:false
  };
  togglePersonsHandler = () =>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice()
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  };
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
  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id===id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    //const person = Object.assign({},this.state.persons[personIndex]);
    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] =person;
    this.setState({persons:persons});
  }
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons=null;
    if(this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person,index) => {
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=> this.nameChangedHandler(event,person.id)}
            ></Person>
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          ></Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Maximilian")}
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
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* <UserInput  
        changed={this.userNameChangeHandler}
        currentName={this.state.userName}
        ></UserInput>
        <UserOutput userName={this.state.userName}></UserOutput>
        <UserOutput userName="Shubham"></UserOutput>
        <UserOutput userName={this.state.userName}></UserOutput>
         */}
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
           
        
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
