//import Inferno from 'inferno';
import _ from 'underscore';

export default function Select(props){
  const {options, emptyItem} = props
  let itemList = _.isArray(options) ? options :
    _.map(options, (item, i) => item && item.key ? item : {key: i, text: item})
  if(emptyItem){
    itemList = [emptyItem].concat(itemList)
  }
  return <select {...props}>
    {itemList.map(({key, text}) =>
      <option value={key}>{text}</option>
    )}
  </select>
}

Select.defaultProps = {
  options: [],
  emptyItem: {key: '', text: '全部'}
}
