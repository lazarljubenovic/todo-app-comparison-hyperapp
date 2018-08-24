import {app, h} from 'hyperapp'
import List from './components/List'
import Filters from './components/Filters'

let counter = 0

const state = {
  items: [],
  filter: 'all',
  editId: null,
}

const actions = {
  addItem: (itemText) => state => {
    const trimmed = itemText.trim()
    if (trimmed.length === 0) return
    const newItem = {
      id: counter++,
      text: trimmed,
      isCompleted: false,
    }
    return {...state, items: [...state.items, newItem]}
  },
  toggle: id => state => {
    const index = state.items.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = state.items[index]
    const newItem = {...oldItem, isCompleted: !oldItem.isCompleted}
    const before = state.items.slice(0, index)
    const after = state.items.slice(index + 1)
    return {...state, items: [...before, newItem, ...after]}
  },
  enterEditMode: editId => state => {
    return {...state, editId}
  },
  edit: ({id, text}) => state => {
    const index = state.items.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error(`Item with ID ${id} not found.`)
    }
    const oldItem = state.items[index]
    const newItem = {...oldItem, text}
    const before = state.items.slice(0, index)
    const after = state.items.slice(index + 1)
    return {...state, items: [...before, newItem, ...after]}
  },
  changeFilter: filter => state => {
    return {...state, filter}
  },
}

const view = ({items, filter, editId}, actions) => {

  const visibleItems = filter === 'all'
    ? items
    : filter === 'complete'
      ? items.filter(item => item.isCompleted)
      : items.filter(item => !item.isCompleted)

  return h('div', {className: 'App'}, [
    h(List, {
      items: visibleItems,
      editItemId: editId,
      totalItemsCount: visibleItems.length,
      add: actions.addItem,
      toggle: actions.toggle,
      edit: actions.edit,
      enterEditMode: actions.enterEditMode,
    }),
    h(Filters, {
      filter,
      filterChange: actions.changeFilter,
    }),
  ])

}

app(state, actions, view, document.body)
