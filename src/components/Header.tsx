import { useAppSelector } from '../store'
import { useCurrentLesson } from '../store/slices/player'

export function Header() {
	const { currentModule, currentLesson } = useCurrentLesson()
	const isCourseLoading = useAppSelector((state) => state.player.isLoading)

	if (isCourseLoading) {
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
