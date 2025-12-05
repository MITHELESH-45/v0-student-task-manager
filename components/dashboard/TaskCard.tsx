"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2, CheckCircle2 } from "lucide-react"

interface Task {
  id: number
  studentId: number
  title: string
  description: string
  status: "pending" | "completed"
  dueDate: string
}

interface TaskCardProps {
  task: Task
  onMarkDone: (id: number) => void
  onDelete: (id: number) => void
}

export function TaskCard({ task, onMarkDone, onDelete }: TaskCardProps) {
  const isPending = task.status === "pending"

  return (
    <div
      className={`border rounded-lg p-4 transition-all ${
        task.status === "completed"
          ? "border-slate-700 bg-slate-700/20"
          : "border-slate-700 bg-slate-700/30 hover:bg-slate-700/50 hover:shadow-lg"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3
              className={`font-semibold ${task.status === "completed" ? "line-through text-slate-500" : "text-white"}`}
            >
              {task.title}
            </h3>
            <Badge
              variant={isPending ? "default" : "secondary"}
              className={isPending ? "bg-orange-600/80 text-orange-100" : "bg-green-600/80 text-green-100"}
            >
              {isPending ? "⏳ Pending" : "✅ Completed"}
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mb-2">{task.description}</p>
          <p className="text-xs text-slate-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
        </div>

        <div className="flex gap-2 flex-shrink-0">
          {isPending && (
            <Button
              size="sm"
              onClick={() => onMarkDone(task.id)}
              className="bg-green-600/80 hover:bg-green-600 text-white gap-1"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden sm:inline">Done</span>
            </Button>
          )}
          <Button size="sm" onClick={() => onDelete(task.id)} className="bg-red-600/80 hover:bg-red-600 text-white">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
