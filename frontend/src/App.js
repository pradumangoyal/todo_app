import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { todos: [] };
}
  async componentDidMount(){
    try{
        const res = await fetch('http://127.0.0.1:8000/api/');
        const todo = await res.json();
        this.setState({ todos: todo });
}catch(e){
    console.log(e);
}
}    
    render() {
    return (
      <div>
        {this.state.todos.map(item => (
            <div key={item.id}>
                <h1>{item.title}</h1>
                <span>{item.description}</span>
            </div>
))}
      </div>
    );
  }
}

export default App;
