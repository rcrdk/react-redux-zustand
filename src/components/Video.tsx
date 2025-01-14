import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'

import { useAppDispatch, useAppSelector } from '../store'
import { next, useCurrentLesson } from '../store/slices/player'

export function Video() {
	const dispatch = useAppDispatch()
	const { currentLesson } = useCurrentLesson()
	const isCourseLoading = useAppSelector((state) => state.player.isLoading)

	function handlePlayNext() {
		dispatch(next())
	}

	return (
		<div className="w-full bg-zinc-950 aspect-video">
			{isCourseLoading ? (
				<div className="flex size-full items-center justify-center">
					<Loader className="size-10 text-zinc-400 animate-spin" />
				</div>
			) : (
				<ReactPlayer
					width="100%"
					height="100%"
					controls
					url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
					playing
					onEnded={handlePlayNext}
				/>
			)}
		</div>
	)
}
