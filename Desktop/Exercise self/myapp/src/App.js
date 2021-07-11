
import './App.css';
import React, { Fragment } from 'react';
class App extends React.Component {
constructor(props) {
  super(props)
this.state = {
  undone : ["item1","item2","item3","item4","item5"],
  done : []
}
}
renderUndoneList = () => {
  return this.state.undone.map(undone => {
    return <p>{undone}</p>
  })
}
renderDoneList = () => {
  return this.state.done.map(done => {
    return <p>{done}</p>
  })
}

clickUndone = value => {
  let newUndone = [...this.state.undone,this.state.undone.splice(this.state.undone.indexOf(value.target.textContent),1)]
  let newDone=[...this.state.done,value.target.textContent]
  this.setState(newUndone)
  this.setState(newDone)
 this.state.done.push(value.target.textContent)
  console.log(this.state.undone)
  console.log(this.state.done)
}

clickDone = value => {
  let newDone = [...this.state.done,this.state.done.splice(this.state.done.indexOf(value.target.textContent),1)]
  let newUndone=[...this.state.undone,value.target.textContent]
  this.setState(newUndone)
  this.setState(newDone)
  this.state.done.push(value.target.textContent)
  console.log(this.state.undone)
  console.log(this.state.done)
}

  render (){
    return (
<Fragment>
  <div className="undone" onClick ={this.clickUndone}>{this.renderUndoneList()}</div>
  <div className="done" onClick={this.clickDone}>{this.renderDoneList}</div>
</Fragment>
  );
}
}

export default App;
