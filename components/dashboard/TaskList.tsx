"use client"

import { TaskCard } from "@/components/dashboard/TaskCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Task {
  id: number
  studentId: number
  title: string
  description: string
  status: "pending" | "completed"
  dueDate: string
}

interface TaskListProps {
  tasks: Task[]
  onMarkDone: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskList({ tasks, onMarkDone, onDelete }: TaskListProps) {
  return (
    <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-white">Your Tasks</CardTitle>
        <CardDescription className="text-slate-400">{tasks.length} tasks total</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-slate-400 py-8">No tasks yet. Create one to get started!</p>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} onMarkDone={onMarkDone} onDelete={onDelete} />)
          )}
        </div>
      </CardContent>
    </Card>
  )
}
