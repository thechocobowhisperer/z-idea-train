import './App.css';
import {Button, Input, Card, CardBody} from 'reactstrap';

import React, {Component} from 'react';

class App extends Component{
  state ={animal:'cat', name: ''}
  
  bossNames = ['Zac', 'Jo', 'Maria']
  cardStuff = [{name: 'Contact', link: 'http://contactpage.com'}, {name: 'Help', link: 'http://help.com'}]

  changeAnimal = (furbaby)  => {
    console.log(furbaby.target.name)
    let newAnimal = this.state.animal
    newAnimal = 'dog'
    
    console.log(furbaby.target.value)
    this.setState({animal: newAnimal})
  } 
  
  changeName = (event) => {
    let newName = event.target.value
    this.bossNames.map(boss => {
      if (newName === boss) {
        newName = 'Boss ' + newName
      }
    })

    this.setState({name: newName})
  }

  render() {
    console.log('I get rendered every single time!')
    const links = (this.state.name !== 'baby') ? (this.cardStuff.map((info, index) =>{
      return <Card key={index}><div className='row'><div className='col-4'><strong>{info.name}</strong> :</div> <div className='col-4'></div>{info.link}</div></Card>
    })) : null

      return(
        <div>
          <h2>You are a {this.state.animal} lover. How wonderful!</h2>
          <Button color="primary" onClick={(dog) => this.changeAnimal(dog)}>
            Submit favorite animal
          </Button>
          <p>Hello, {this.state.name}.</p>
          <Input onChange={(event) => this.changeName(event)}/> 
          {links}
        </div>
      );
  };
};
 
export default App;