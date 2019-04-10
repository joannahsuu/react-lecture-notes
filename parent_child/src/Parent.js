import React, {Component, createRef} from 'react'
import Child from './Child'

class Parent extends Component {
  childRef = createRef()
  state = {
    count: 0,
    childCount: 0, // for 子組件
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  addChildCount = () => {
    // 使用 child addCount 函式
    // this.childRef.current.addCount()
    this.setState({
      childCount: this.state.childCount + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Parent : {this.state.count}</h1>
        {/* <button onClick={this.addCount}> + 1</button> */}
        <button onClick={this.addCount}> + Parent</button>
        <button onClick={this.addChildCount}> + Child</button>
        <hr></hr>
        <Child
          count={this.state.childCount}
          ref={this.childRef}
          addParentCount={this.addCount}
          addChildCount={this.addChildCount} />
        {/* <Child ref={this.childRef} addParentCount={this.addCount}/> */}
      </div>
    )
  }
}

export default Parent