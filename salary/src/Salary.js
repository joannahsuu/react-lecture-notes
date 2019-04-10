import React, {Component} from 'react'

// 薪水計算器
class Salary extends Component {
  state = {
    month: 0,
    startTime: Date.now(),
    currentTime: Date.now(),
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentTime: Date.now()
      })
    }, 100);
  }
  onChangeMonth = e => {
    this.setState({
      month: parseInt(e.target.value, 10)
    })
  }
  render() {
    const {month, startTime, currentTime} = this.state
    const time = (currentTime - startTime) / 1000
    return (
      <div>
        <label>月薪</label>
        <input
          type="number"
          value={month}
          onChange={this.onChangeMonth}></input>
        <br/>
        <label>時薪</label>
        <input
          type="number"
          value={month / 240}></input>
        <br/>
        <label>分薪</label>
        <input
          type="number"
          value={month / 240 / 60}></input>
        <br/>
        <label>秒薪</label>
        <input
          type="number"
          value={month / 240 / 60 / 60}></input>
        <br/>
        <label>經過時間</label>
        <span>{time.toFixed(1)}</span>
        <br/>
        <label>偷取薪水</label>
        <span>{(time*month) / 240 / 60/ 60}</span>
      </div>
    )
  }
}

export default Salary