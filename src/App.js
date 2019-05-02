import './App.css';
import {Button} from 'reactstrap';

import React, {Component} from 'react';

class App extends Component{
  state ={animal:'cat'}
  changeAnimal = (furbaby)  => {
    console.log(furbaby.target.name)
    let newAnimal = this.state.animal
    newAnimal = 'dog'
    
    console.log(furbaby.target.value)

    this.setState({animal: newAnimal})
  } 
  
  render() {
      return(
        <div>
          <h2>You are a {this.state.animal} lover. How wonderful!</h2>
          <Button color="primary" onClick={(dog) => this.changeAnimal(dog)}>
            Submit favorite animal
          </Button> 
        </div>
      );
  };
};
 
export default App;
