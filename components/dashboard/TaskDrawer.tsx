"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Task {
  id: number
  studentId: number
  title: string
  description: string
  status: "pending" | "completed"
  dueDate: string
}

interface Student {
  id: number
  name: string
  email: string
  totalTasks: number
  completedTasks: number
  pendingTasks: number
}

interface TaskDrawerProps {
  student: Student | null
  tasks: Task[]
  isOpen: boolean
  onClose: () => void
  onMarkTaskDone: (taskId: number) => void
}

export function TaskDrawer({ student, tasks, isOpen, onClose, onMarkTaskDone }: TaskDrawerProps) {
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/60 z-40" onClick={onClose} />}

      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-96 bg-gradient-to-b from-slate-800 to-slate-900 border-l border-slate-700 shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="border-b border-slate-700 p-4 flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-white">{student?.name}</h2>
              <p className="text-sm text-slate-400">{student?.email}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 transition">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {tasks.length === 0 ? (
              <p className="text-center text-slate-400 py-8">No tasks assigned</p>
            ) : (
              tasks.map((task) => (
                <Card key={task.id} className="border-slate-700 bg-slate-700/30 p-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        className={`font-medium ${
                          task.status === "completed" ? "line-through text-slate-500" : "text-white"
                        }`}
                      >
                        {task.title}
                      </h3>
                      <Badge
                        variant={task.status === "pending" ? "default" : "secondary"}
                        className={task.status === "pending" ? "bg-orange-600/80" : "bg-green-600/80"}
                      >
                        {task.status === "pending" ? "⏳" : "✅"}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-400">{task.description}</p>
                    <p className="text-xs text-slate-500">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
                    {task.status === "pending" && (
                      <Button
                        size="sm"
                        onClick={() => onMarkTaskDone(task.id)}
                        className="w-full mt-3 bg-green-600/80 hover:bg-green-600 text-white gap-1"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Mark as Done
                      </Button>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>

          {student && (
            <div className="border-t border-slate-700 p-4 space-y-2 bg-slate-800/50">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Total Tasks:</span>
                <span className="font-semibold text-white">{student.totalTasks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Completed:</span>
                <span className="font-semibold text-green-400">{student.completedTasks}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Pending:</span>
                <span className="font-semibold text-orange-400">{student.pendingTasks}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
