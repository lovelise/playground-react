import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

constructor(){
  super();

  this.state = {
    monster:[
      {
        name: 'Frankenstein',
        id:'asc1'
      },
      {
        name:'Dracula',
        id:'asc2'
      },
      {
        name:'Zombie',
        id:'asc3'
      }
    ]
  };
}
//ended constructor



  render(){
  return (
    <div className="App">
      {
        this.state.monster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
    </div>
  );    
  }

}

export default App;
