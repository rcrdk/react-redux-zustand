import { Provider as ReduxProvider } from 'react-redux'
import { AddTodo } from './components/AddToDo'
import { TodoList } from './components/ToDoList'
import { store } from './store'

export function App() {
	return (
		<ReduxProvider store={store}>
			<TodoList />
			<AddTodo />
		</ReduxProvider>
	)
}
