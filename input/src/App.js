import React, {Component} from 'react'

// 檔案上傳與圖片預覽
class App extends Component {
  state = {
    file: null,
    img: '',
  }
  onChange = e => {
    console.log(e.target.files)
    const file = e.target.files.item(0)
    const fr = new FileReader()
    fr.addEventListener('load', this.fileLoad)
    fr.readAsDataURL(file)
    this.setState({
      file,
    })
  }
  fileLoad = e => {
    this.setState({
      img: e.target.result,
    })
  }
  submit = () => {
    // json base64
    // axios.post('/img', {img: this.state.img})

    // multipart
    // const form = new FormData()
    // form.append(this.state.file)
    // axios.post('/img', {form})
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.onChange}/>
        <img width="100%" src={this.state.img} alt="" />
        <button onSubmit={this.submit}>上傳</button>
      </div>
    )
  }
}

export default App