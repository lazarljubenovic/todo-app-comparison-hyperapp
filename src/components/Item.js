import {h} from 'hyperapp'
import EditItem from './EditItem'

export default ({item, toggle, edit, editItemId, enterEditMode}) => {

  const isEditMode = item.id === editItemId

  const toggleText = item.isCompleted ? `Undo` : `Done`
  const className = item.isCompleted ? 'complete' : ''

  const onEditClick = () => {
    enterEditMode(item.id)
  }

  const onEditSubmit = text => {
    enterEditMode(null)
    if (text != null) {
      const data = {id: item.id, text}
      edit(data)
    }
  }

  return h('div', {className: 'Item'}, [
    isEditMode
      ?
      h(EditItem, {item, submit: onEditSubmit})
      :
      h('div', {className}, [
        h('span', null, [item.text]),
        h('button', {onclick: toggle}, [toggleText]),
        !item.isCompleted && h('button', {onclick: onEditClick}, ['Edit']),
      ]),
  ])

}
