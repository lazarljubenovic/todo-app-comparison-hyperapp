import {h} from 'hyperapp'

export default ({add}) => {

  const onsubmit = event => {
    event.preventDefault()
    const $form = event.target
    const $input = $form.elements.namedItem('text')
    const {value} = $input
    const trimmed = value.trim()
    if (trimmed.length === 0) return
    add(trimmed)
    $input.value = ''
  }

  return h('div', {className: 'ItemCreator'}, [
    h('form', {onsubmit}, [
      h('label', null, [
        h('span', null, [`New item`]),
        h('input', {type: 'text', name: 'text'}),
      ]),
      h('button', {type: 'submit'}, [`Add`]),
    ]),
  ])

}
