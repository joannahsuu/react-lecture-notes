import React, { Component } from 'react'
import files from './files.json'
import FileNode from './FileNode'

import './style.css'
class App extends Component {
  render() {
    return (
      <div>
        {/* <FileNode name={files.name} files={files.files} /> */}
        <FileNode {...files} />
      </div>
    )
  }
}

export default App