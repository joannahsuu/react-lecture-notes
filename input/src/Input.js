import React, {Component, createRef} from 'react'

class Inputt extends Component {
  myInput = createRef()
  // 生命週期函式
  componentDidMount() {
    // this.refs.myInput.focus()
    this.myInput.current.focus()
  }
  // setRef = (input) => {
  //   // this.myInput = input
  //   input.focus()
  // }
  render() {
    return (
      <div>
        <h3>Enter your name</h3>
        {/* <input type="text" ref={this.setRef}/> */}
        <input type="text" ref={this.myInput}/>
      </div>
    )
  }
}

export default Inputt