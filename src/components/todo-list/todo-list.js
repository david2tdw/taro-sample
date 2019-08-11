import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import TodoItem from '../todo-item/todo-item'
import { TodoStore, getFilteredTodos, useStore } from '../../store/store'

const TodoList = () => {
  const { visibilityFilter } = useStore(TodoStore)
  const todos = getFilteredTodos(visibilityFilter)
  return (
    <View className='todo-list'>
      {todos.map((todo, i) => <TodoItem key={todos.id} todo={todo} isLast={i === todos.length - 1} />)}
    </View>
  )
}
export default TodoList
