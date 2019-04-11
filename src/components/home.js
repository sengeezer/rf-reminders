import React from 'react';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h2>Home</h2>
    
    <p>Welcome home!</p>
    <button onClick={() => props.changePage()}>Go to about page via redux</button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about')
}, dispatch);

export default connect(null, mapDispatchToProps)(Home);
