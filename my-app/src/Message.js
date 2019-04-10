import React, {Component} from 'react';

class Message extends Component {
  state = {
    title: 'Message',
    text: 'Hello 2',
  }
  /**
   * 自訂函式
   */
  sayHi = () => {
    /**
     * setState 只傳入欲更新的屬性狀態
     */
    this.setState({
      text: 'hi'
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.text}</h3>
        <button onClick={this.sayHi}>Say Hi</button>
      </div>
    )
  }
}

export default Message