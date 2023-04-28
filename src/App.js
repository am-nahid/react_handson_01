
import './App.css';
import React from "react";
import FunctionalCompo from './Components/FunctionalComponent'
import { ClassComponent } from './Components/ClassComponent';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    showFunctionalComponent: true,
    showClassComponent: true
  }
}

toggleFuncComp=()=>{
  this.setState((prev)=>({
    showFunctionalComponent: !prev.showFunctionalComponent
  }))
}

toggleClassComp =()=>{
  this.setState((prev)=>({
    showClassComponent: !prev.showClassComponent
  }))
}
  render(){
  return (
    <div className="App">
      <h1 className='mainHead'>Styling using Functional and Class Component</h1>
      <button onClick={this.toggleFuncComp} className="button1">To see styling in Functional Component</button>
      <button onClick={this.toggleClassComp} className="button2"> To see styling in Class Component</button>
     {this.state.showFunctionalComponent && <FunctionalCompo/>}
     {this.state.showClassComponent && <ClassComponent/>}
    </div>
  );
  }
}

export default App;
