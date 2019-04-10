import React, { Component } from 'react'

import MyButton from './MyButton'
import YourButton from './YourButton'

const App = () => (
  <div>
    <MyButton>Hello</MyButton>
    <YourButton>World</YourButton>
  </div>
)
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       </div>
//     )
//   }
// }

export default App
