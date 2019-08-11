import Taro, { useState} from '@tarojs/taro'
import { Input } from '@tarojs/components'
import classnames from 'classnames'

function TodoTextInput ({ edit, newTodo, placeholder, text, onSave}) {
  // console.log(text, newTodo)
  const [ value, setValue] = useState(text)
  // console.log(value, setValue)
  return (
    <Input
      autoFocus
      className={classnames({ edit, 'new-todo': newTodo })}
      type='text'
      placeholder={placeholder}
      value={value}
      onBlur={e => {
        if (!newTodo) {
          onSave(e.detail.value)
        }
      }}
      onInput={e => setValue(e.detail.value)}
      onConfirm={e => {
        onSave(e.detail.value.trim())
        if (newTodo) {
          setValue('')
        }
      }}
    />
  )
}

export default TodoTextInput
