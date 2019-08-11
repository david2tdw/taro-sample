import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { addTodo, completeAllTodos } from '../../store/store'
import TodoTextInput from '../todo-text-input/todo-text-input'
import FilterLink from '../link/link'
import './header.scss'

const FILTER_TITLE = ['All', 'Active', 'Completed']

function Header () {
  return (
    <View className='header'>
       <View className='header-title-wrap'>
        <Text className='title'>todos</Text>
      </View>
      <View className="filters">
        {FILTER_TITLE.map(filter => <FilterLink filter={filter} key={filter} />)}
      </View>
      <View className='textinput-wrap'>
        <Text className='textinput-wrap-icon' onClick={() => completeAllTodos() }>❯</Text>
        <View className='textinput-wrap-input'>
        <TodoTextInput
          newTodo
          onSave={text => {
            console.log('TodoTextInput save:', text)
            if (text.length !== 0) {
              addTodo(text)
            }
          }}
          placeholder='What needs to be done?'
        />
        </View>
      </View>
    </View>
  )
}

export default Header
