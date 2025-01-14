import { Video } from 'lucide-react'

type Props = {
	title: string
	duration: string
}

export function Lesson({ title, duration }: Props) {
	return (
		<button className="flex items-center gap-3 text-sm text-zinc-400">
			<Video className="size-4 text-zinc-500" />
			<span>{title}</span>
			<span className="ml-auto font-mono text-xs text-zinc-500">
				{duration}
			</span>
		</button>
	)
}
