import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  // 預設值
  // static defaultProps = {
  //   initCount: 0,
  // }
  // 利用 props 設定初始值
  constructor(props){
    super(props);
    this.state = {
      count: props.initCount
    }
  }
  // state = {
  //   count: 0,
  //   step: 1,
  // }
  addCount = () => {
    // 解構
    // const { count } = this.state
    // this.setState({
    //   count: count + 1
    // })
    this.setState((state) => ({ count: state.count + 1
    }, () => {
      // state 的值更新後，執行的函數
      this.sendCount()
    }))
  }
  sendCount = () => {
    fetch(`/api/count?value=${this.state.count}`)
  }
  render() {
    // 解構
    const { count } = this.state
    return(
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}> + 1</button>
      </div>
    )
  }
}

// 預設值
Counter.defaultProps = {
  initCount: 0,
}

// 型別檢查
Counter.propTypes = {
  initCount: PropTypes.number,
}

export default Counter