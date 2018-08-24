import {h} from 'hyperapp'

export default ({filter, filterChange}) => {

  const isSelectedAll = filter === 'all' ? 'selected' : ''
  const isSelectedComplete = filter === 'complete' ? 'selected' : ''
  const isSelectedIncomplete = filter === 'incomplete' ? 'selected' : ''

  return h('div', {className: 'Filters'}, [
    h('button', {className: isSelectedAll, onclick: () => filterChange('all')}, [`All`]),
    h('button', {className: isSelectedComplete, onclick: () => filterChange('complete')}, [`Complete`]),
    h('button', {className: isSelectedIncomplete, onclick: () => filterChange('incomplete')}, [`Incomplete`]),
  ])

}
