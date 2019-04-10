import React, {Component} from 'react'

// 數字處理
class App extends Component {
  state = {
    text: 0,
  }
  onChange = (e) => {
    this.setState({
      text: parseInt(e.target.value, 10)
    })
  }
  render() {
    const { text } = this.state
    return (
      <div>
        <input
          type="number"
          value={text}
          onChange={this.onChange} />
        {/* <input
          type="text"
          value={text}
          onChange={this.onChange} /> */}
        <h2>next: {text + 1}</h2>
      </div>
    )
  }
}

export default App