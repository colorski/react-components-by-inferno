import { Component } from 'inferno';
import SearchInput from '../SearchInput';

export default class UseSearchInput extends Component {
  render () {
    return (
      <div>
        <SearchInput clearable placeholder="34" value=""
          onChange={e=>console.log(e.target.value)}
        />
      </div>
    )
  }
}