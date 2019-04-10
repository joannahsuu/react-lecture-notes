import React, {Component} from 'react'

// 單選與多選
class App extends Component {
  state = {
    gender: 'male',
    // like: [],
    like: {
      male: false,
      female: false,
    },
  }
  onChangeGender = e => {
    this.setState({
      gender: e.target.value
    })
  }
  onChangeLike = e => {
    const key = e.target.value
    console.log('key', key)
    this.setState((state) => ({
      like: {
        ...state.like,
        [key]: !state.like[key],
      }
    }))
  }
  render() {
    const { gender, like } = this.state
    return (
      <div>
        <div>
          Your gender:
          <input
            type="radio"
            value="male"
            onChange={this.onChangeGender}
            checked={gender === 'male'}/>
          <label>Male</label>
          <input
            type="radio"
            value="female"
            onChange={this.onChangeGender}
            checked={gender === 'female'} />
          <label>Female</label>
        </div>
        <div>
          You Like:
          <input
            type="checkbox"
            value="male"
            checked={like.male}
            onChange={this.onChangeLike} />
          <label>Male</label>
          <input
            type="checkbox"
            value="female"
            checked={like.female}
            onChange={this.onChangeLike} />
          <label>Female</label>
        </div>
        <div>{JSON.stringify(this.state, null, 2)}</div>
      </div>
    )
  }
}

export default App