import React, { Component } from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  del,
  store,
  add,
  subtract
} from "../../store/actions/actions";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSub} />
        <hr />
        <button onClick={() => this.props.onSave(this.props.ctr)}>
          Store result
        </button>
        <ul>
          {this.props.stored.map(result => (
            <li onClick={() => this.props.onDelete(result.id)} key={result.id}>
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    stored: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onAdd: () => dispatch(add(5)),
    onSub: () => dispatch(subtract(5)),
    onSave: result => dispatch(store(result)),
    onDelete: id => dispatch(del(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
