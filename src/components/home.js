import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../actions/counter';

const Home = props => (
  <div>
    <h2>Home</h2>
    
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment}>Increment</button>
      <button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}
      >
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement}>Decrement</button>
      <button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}
      >
        Decrement Async
      </button>
    </p>

    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about')
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
