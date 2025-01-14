import { useCurrentLesson, useStore } from '../store'

export function Header() {
	const isLoading = useStore((state) => state.isLoading)
	const { currentModule, currentLesson } = useCurrentLesson()

	if (isLoading) {
		return (
			<div className="flex flex-col gap-1 flex-1 animate-pulse">
				<h1 className="text-2xl text-transparent bg-zinc-800 rounded w-1/3">
					Loading...
				</h1>
				<span className="text-sm text-transparent bg-zinc-800 rounded w-1/6">
					Loading...
				</span>
			</div>
		)
	}

	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
			<span className="text-sm text-zinc-400">
				Módulo &quot;{currentModule?.title}&quot;
			</span>
		</div>
	)
}
