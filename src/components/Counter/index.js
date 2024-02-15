import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css'
class Counter extends Component{
    state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }
    render(){
        const { count } = this.state
    return (
      <center><div className="mt-5 px-3 py-4">
        <h1 className="h1 display-1"><b>counter:</b></h1>
        <h1 className="h1 display-1 mt-5 mb-3"><b>{count}</b></h1>
        <button className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="btn btn-dark btn-lg mx-3 px-5 py-3 mt-2" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
      </center>
    )

    }
}
export default Counter