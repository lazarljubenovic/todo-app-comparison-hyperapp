import {h} from 'hyperapp'
import Item from './Item'
import ItemCreator from './ItemCreator'

export default ({items, totalItemsCount, add, toggle, edit, editItemId, enterEditMode}) => {

  const isEmpty = totalItemsCount === 0
  const isItemsEmpty = items.length === 0

  return h('div', {className: 'List'}, [
    isEmpty
      ?
      h('p', {className: 'empty'}, [`The list is empty`])
      :
      isItemsEmpty
        ?
        h('p', {className: 'empty'}, [
          `No items to show for this filter`,
          h('br'),
          `There are `, totalItemsCount, ` items in total.`,
        ])
        :
        h('ol', null, items.map(item => {
          return h('li', {key: item.id}, [
            h(Item, {item, toggle: () => toggle(item.id), edit, editItemId, enterEditMode}),
          ])
        })),
    h(ItemCreator, {add}),
  ])

}
