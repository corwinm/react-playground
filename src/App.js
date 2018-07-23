import React, { Component } from 'react';
import './App.css';

import Router from './Router';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import aws_exports from './aws-exports'; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

const includeGreetings = true;

export default withAuthenticator(App, includeGreetings);
