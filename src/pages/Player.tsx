import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

import { Header } from '../components/Header'
import { Module, ModuleSkeleton } from '../components/Module'
import { Video } from '../components/Video'
import { useAppDispatch, useAppSelector } from '../store'
import { loadCourse, useCurrentLesson } from '../store/slices/player'

export function Player() {
	const dispatch = useAppDispatch()
	const modules = useAppSelector((state) => state.player.course?.modules)
	const isCourseLoading = useAppSelector((state) => state.player.isLoading)

	const { currentLesson } = useCurrentLesson()

	useEffect(() => {
		dispatch(loadCourse())
	}, [dispatch])

	useEffect(() => {
		if (currentLesson) {
			document.title = `${currentLesson.title} – React + Redux + Zustand`
		}
	}, [currentLesson])

	return (
		<div className="min-h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center py-8">
			<div className="flex w-[1100px] flex-col gap-6">
				<div className="flex items-center justify-between">
					<Header />

					<button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 font-medium text-sm text-white hover:bg-violet-600">
						<MessageCircle className="size-4 stroke-[2]" />
						Deixar Feedback
					</button>
				</div>

				<main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
					<div className="flex-1">
						<Video />
					</div>

					<aside className="divide-y-2 divide-zinc-900 absolute top-0 right-0 bottom-0 overflow-y-scroll w-80 border-l border-zinc-800 bg-zinc-900 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
						{isCourseLoading &&
							Array.from({ length: 6 }).map((_, i) => (
								<ModuleSkeleton key={i} />
							))}

						{modules &&
							modules.map((item, index) => (
								<Module
									key={index}
									moduleIndex={index}
									title={item.title}
									lessonsAmount={item.lessons.length}
								/>
							))}
					</aside>
				</main>
			</div>
		</div>
	)
}
