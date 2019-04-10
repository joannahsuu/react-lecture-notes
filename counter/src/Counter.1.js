import React, {Component} from 'react'

class Counter extends Component {
  state = { count: 0}
  // 生命週期
  constructor(props) {
    super(props)
  }
  render() {
    // 不能使用 setState
    return (
      <div>Counter</div>
    )
  }
}

export default Counter