import React, { Component } from 'react';
import './App.css';
import LeftNav from './components/left-nav-component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state={links:[]};
  }
  componentWillMount() {
    fetch('/api/v1/left-nav')
      .then(result=>result.json())
      .then( result => {
        this.setState(result);
        //alert(JSON.stringify(this.state));
      });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App Setup Automation on Node</h2>
        </div>
        <div className="main-content">
          <LeftNav leftNavData={this.state.links} />
          <p className="App-intro">
Lorem ipsum dolor sit amet, cras lobortis molestie urna purus metus, scelerisque amet non vestibulum at. Id semper non est justo venenatis, ac ut justo, semper massa viverra purus libero. Purus accumsan lorem vestibulum vestibulum id eros, malesuada enim ipsum, elementum tellus. Sem urna vestibulum euismod felis, morbi quisque porta, proin quis et. A id augue duis convallis wisi orci, turpis eget faucibus enim nostra, dui ligula sit eget nec, nulla scelerisque morbi mi. Magna odio at viverra ipsum mi, pellentesque lorem, metus a luctus amet, quam duis amet tristique orci curabitur. Lacus malesuada tempor in, in ornare, non purus eget curabitur ut nam placerat, lorem duis orci, amet vestibulum. Tellus nunc tortor wisi. Netus vel nec rutrum id suspendisse augue, molestie ipsum integer, sociosqu posuere nam mauris nonummy fames, augue odio integer libero, fusce elit quis. Vestibulum nisl viverra platea nisl ultricies. Pellentesque turpis at turpis blandit.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
