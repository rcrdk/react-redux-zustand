import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'

import { useCurrentLesson, useStore } from '../store'

export function Video() {
	const { next, isLoading } = useStore((state) => {
		return {
			next: state.next,
			isLoading: state.isLoading,
		}
	})

	const { currentLesson } = useCurrentLesson()

	return (
		<div className="w-full bg-zinc-950 aspect-video">
			{isLoading ? (
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
					onEnded={() => next()}
				/>
			)}
		</div>
	)
}
