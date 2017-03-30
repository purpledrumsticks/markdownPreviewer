import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  handleInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  getMarkdownText = () => {
    let rawMarkup = marked(this.state.input, {sanitize: true});
    return {__html: rawMarkup};
  }
  render() {
    return (
      <div className="App">
        <h1>Type Some Markdown below</h1>
        <textarea
          value={this.state.input}
          onChange={this.handleInput} />
        <div class="output" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </div>
    );
  }
}

export default App;
