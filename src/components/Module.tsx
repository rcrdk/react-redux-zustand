import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown } from 'lucide-react'

import { Lesson } from './Lesson'

type Props = {
	moduleIndex: number
	title: string
	lessonsAmount: number
}

export function Module({ moduleIndex, title, lessonsAmount }: Props) {
	return (
		<Collapsible.Root className="group">
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
					<Lesson title="Fundamentos do redux" duration="09:27" />
					<Lesson title="Fundamentos do redux" duration="09:27" />
					<Lesson title="Fundamentos do redux" duration="09:27" />
				</nav>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
