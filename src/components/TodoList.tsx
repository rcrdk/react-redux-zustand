import { useAppSelector } from '../store'

export function TodoList() {
	const store = useAppSelector((store) => {
		return store.todo
	})

	return (
		<ul>
			{store.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</ul>
	)
}
