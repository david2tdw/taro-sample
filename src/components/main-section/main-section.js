import Taro from '@tarojs/taro'
import { useStore, TodoStore, clearCompletedTodos, getCompletedCount } from '../../store/store'
import TodoList from '../../components/todo-list/todo-list'
import Footer from '../footer/footer'
import './main-section.scss'

function MainSection () {
  const { todos } = useStore(TodoStore)
  console.log(todos)
  const todosCount = todos.length
  const completedCount = getCompletedCount(todos)
  return (
    <View>
      <TodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={() => clearCompletedTodos()}
        />
      )}
    </View>
  )
}

export default MainSection
