import './App.css';
import {Button, Input, Card, CardBody, CardTitle} from 'reactstrap';
import React, {Component} from 'react';

class App extends Component{
  state ={animal:'cat', name: '', integer: ''}
  
  bossNames = ['Zac', 'Jo', 'Maria']
  cardStuff = [{name: 'Contact', link: 'http://contactpage.com'}, {name: 'Help', link: 'http://help.com'}]
  luckyNums = [1, 3, 4, 9]
  unluckyNums = [2, 5, 6,7,8,10]

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
    console.log(event.target.value)
    this.setState({name: newName})
  }

  randomNumber = (event) => {
    const num = Math.floor(Math.random() * 10) +1;
    // console.log(num);
    console.log(num % 2 === 0)  
    console.log(this.bossNames)
    this.setState({integer: num});   

  }
    
  


  render() {
    console.log('I get rendered every single time!')
    const links = (this.state.name !== 'baby') ? (this.cardStuff.map((info, index) =>{
      return <Card key={index}><div className='row'><div className='col-2'><strong>{info.name}</strong> :</div> <div className='col-2'></div>{info.link}</div></Card>
    })) : null;
    
   const lucky = (this.luckyNums.includes(this.state.integer)) ? (this.luckyNums.map((int,index) => {
                      return<div key={index} className='col'><Card key={index}><CardBody><CardTitle>{int}</CardTitle></CardBody></Card></div>;
                      }
                    )
                  ) : (this.unluckyNums.map((int,index) => {
                    return <div key={index} className='col'><Card key={index}><CardBody><CardTitle>{int}</CardTitle></CardBody></Card></div>;
                    }
                  )
                );
    // const bossPlusName =  this.bossNames.map(name) => {
    //   console.log('Boss ' + name)
    //   return <div>'Boss ' + name</div>
    // };
    const specialCondition = (this.bossNames.includes(this.state.name.slice(5)) && (this.state.integer % 2===0)) ? 
    null :  ((this.luckyNums.includes(this.state.integer)) ? (this.luckyNums.map((int,index) => {
        return<div key={index} className='col'><Card key={index}><CardBody><CardTitle>{int}</CardTitle></CardBody></Card></div>;
        }
      )
    ) : (this.unluckyNums.map((int,index) => {
      return <div key={index} className='col'><Card key={index}><CardBody><CardTitle>{int}</CardTitle></CardBody></Card></div>;
      }
    )
  ))
    
    
    
    return(
        <div>
          <h2>You are a {this.state.animal} lover. How wonderful!</h2>
          <Button color="primary" onClick={(dog) => this.changeAnimal(dog)}>
            Submit favorite animal
          </Button>
          <p>Hello, {this.state.name}.</p>
          <Input onChange={(event) => this.changeName(event)}/> 
          {links}
          <Button color='success' onClick={(number) => this.randomNumber(number)}>
            Try your luck!
          </Button>
          <strong>Your number is {this.state.integer}</strong>
            <div className='container'>
              <div className='row'>
                {specialCondition}
              </div>
              <div className='row'>
                <Input placeholder='Enter your name' onChange={(name) => this.changeName(name)}>
                </Input>
              </div>
            </div>
        </div>
      );
  };
};
 
export default App;