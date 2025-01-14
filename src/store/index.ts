import { create } from 'zustand'

import { API } from '../lib/axios'

export type Course = {
	id: number
	modules: {
		id: number
		title: string
		lessons: {
			id: string
			title: string
			duration: string
		}[]
	}[]
}

export type PlayerState = {
	course: Course | null
	currentModuleIndex: number
	currentLessonIndex: number
	isLoading: boolean

	load: () => Promise<void>
	play: (moduleAndLessonIndex: [number, number]) => void
	next: VoidFunction
}

export const useStore = create<PlayerState>((set, get) => {
	return {
		course: null,
		currentLessonIndex: 0,
		currentModuleIndex: 0,
		isLoading: true,

		load: async () => {
			set({ isLoading: true })

			const { data } = await API.get<Course>('/courses/1')
			set({ course: data, isLoading: false })
		},

		play: (moduleAndLessonIndex: [number, number]) => {
			const [moduleIndex, lessonIndex] = moduleAndLessonIndex

			set({
				currentModuleIndex: moduleIndex,
				currentLessonIndex: lessonIndex,
			})
		},

		next: () => {
			const { currentLessonIndex, currentModuleIndex, course } = get()

			const nextLessonIndex = currentLessonIndex + 1
			// eslint-disable-next-line prettier/prettier
			const nextLesson = course?.modules[currentModuleIndex].lessons[nextLessonIndex]

			if (nextLesson) {
				set({
					currentLessonIndex: nextLessonIndex,
				})
			} else {
				const nextModuleIndex = currentModuleIndex + 1
				const nextModule = course?.modules[nextModuleIndex]

				if (nextModule) {
					set({
						currentModuleIndex: nextModuleIndex,
						currentLessonIndex: 0,
					})
				}
			}
		},
	}
})

export const useCurrentLesson = () => {
	return useStore((state) => {
		const { currentLessonIndex, currentModuleIndex } = state

		const currentModule = state.course?.modules[currentModuleIndex]
		const currentLesson = currentModule?.lessons[currentLessonIndex]

		return { currentModule, currentLesson }
	})
}
