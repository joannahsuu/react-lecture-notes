import React, {Component, PureComponent} from 'react'

// #1 class component
class ProgressBar extends Component {
  render() {
    const { value } = this.props
    console.count('render')
    return (
      <div className="bar-outer">
        <div
          className="bar-inner"
          style={{ width: `${value}%`}}></div>
        <span>{value}%</span>
      </div>
    )
  }
}

// #2 stateless functional component
// const ProgressBar = (props) => {
//   const { value } = props
//   return (
//     <div className="bar-outer">
//       <div
//         className="bar-inner"
//         style={{ width: `${value}%`}}></div>
//       <span>{value}%</span>
//     </div>
//   )
// }

// #3 PureComponent (prop 或 state 裡的值沒有可以使用，不會重新 render, 效能較佳)
// class ProgressBar extends PureComponent {
//   render() {
//     const { value } = this.props
//     return (
//       <div className="bar-outer">
//         <div
//           className="bar-inner"
//           style={{ width: `${value}%`}}></div>
//         <span>{value}%</span>
//       </div>
//     )
//   }
// }

export default ProgressBar