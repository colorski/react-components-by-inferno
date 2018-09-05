import { Component } from 'inferno';
import Select from '../Select';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      stageVal: 2,
      options: [{key: 1, text: '小学'}, {key: 2, text: '初中'}, {key: 3, text: '高中'}]
    }
  }
  
  render () {
    const {stageVal, options} = this.state
    return (
      <div className="form-element">
        <Select
          value={stageVal}
          options={ options }
          emptyItem={ true }
          placeholderItem={ false }
          onChange={e=> {this.setState({stageVal: e.target.value}); console.log(e.target.value)}}
        />
      </div>
    )
  }
}