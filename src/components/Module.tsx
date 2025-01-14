import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { useAppDispatch, useAppSelector } from '../store'
import { play } from '../store/slices/player'
import { Lesson } from './Lesson'

type Props = {
	moduleIndex: number
	title: string
	lessonsAmount: number
}

export function Module({ moduleIndex, title, lessonsAmount }: Props) {
	const dispach = useAppDispatch()

	const { currentModuleIndex, currentLessonIndex } = useAppSelector((state) => {
		const { currentModuleIndex, currentLessonIndex } = state.player

		return { currentModuleIndex, currentLessonIndex }
	})

	const lessons = useAppSelector((state) => {
		return state.player.course?.modules[moduleIndex].lessons
	})

	return (
		<Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
			<Collapsible.Trigger asChild>
				<button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
					<div className="flex size-10 rounded-full items-center justify-center bg-zinc-950 text-sm font-bold">
						{moduleIndex + 1}
					</div>

					<div className="flex flex-col text-left">
						<strong className="text-sm">{title}</strong>
						<span className="text-xs text-zinc-400">
							{lessonsAmount} {lessonsAmount === 1 ? 'aula' : 'aulas'}
						</span>
					</div>

					<ChevronDown className="size-6 ml-auto text-zinc-500 transition-transform duration-500 group-data-[state=open]:rotate-180" />
				</button>
			</Collapsible.Trigger>

			<Collapsible.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
				<nav className="relative flex flex-col gap-4 p-6">
					{lessons &&
						lessons.map((item, lessonIndex) => (
							<Lesson
								key={item.id}
								title={item.title}
								duration={item.duration}
								isCurrent={
									currentModuleIndex === moduleIndex &&
									currentLessonIndex === lessonIndex
								}
								onPlay={() => dispach(play([moduleIndex, lessonIndex]))}
							/>
						))}
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}

export function ModuleSkeleton() {
	return (
		<div className="flex w-full items-center gap-3 bg-zinc-800 p-4">
			<div className="size-10 rounded-full bg-zinc-700 animate-pulse" />

			<div className="flex flex-1 items-start flex-col text-left gap-1">
				<strong className="w-2/3 text-sm text-transparent bg-zinc-700 rounded animate-pulse">
					Carregando...
				</strong>
				<span className="w-1/3 text-xs text-transparent bg-zinc-700 rounded animate-pulse">
					Carregando...
				</span>
			</div>

			<ChevronDown className="size-6 ml-auto text-zinc-700 transition-transform duration-500 group-data-[state=open]:rotate-180" />
		</div>
	)
}
