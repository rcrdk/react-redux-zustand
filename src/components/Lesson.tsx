import { PlayCircle, Video } from 'lucide-react'

type Props = {
	title: string
	duration: string
	isCurrent?: boolean
	onPlay: VoidFunction
}

export function Lesson({ title, duration, onPlay, isCurrent = false }: Props) {
	return (
		<button
			className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 hover:data-[active=false]:text-zinc-300"
			data-active={isCurrent}
			onClick={onPlay}
		>
			{isCurrent ? (
				<PlayCircle className="size-4 text-emerald-400" />
			) : (
				<Video className="size-4 text-zinc-500" />
			)}
			<span>{title}</span>
			<span className="ml-auto font-mono text-xs text-zinc-500">
				{duration}
			</span>
		</button>
	)
}
