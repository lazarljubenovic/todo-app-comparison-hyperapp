import {h} from 'hyperapp'

export default ({item, submit}) => {

  const onkeydown = event => {
    const {value} = event.target
    if (event.key === 'Enter') {
      event.preventDefault()
      submit(value)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      submit(null)
    }
  }

  return h('div', {className: 'EditItem'}, [
    h('input', {
      type: 'text',
      'aria-label': `Change text`,
      onkeydown,
    }),
  ])

}
