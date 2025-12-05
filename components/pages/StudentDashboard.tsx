"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Navbar } from "@/components/layout/Navbar"
import { TaskInput } from "@/components/dashboard/TaskInput"
import { TaskList } from "@/components/dashboard/TaskList"
import { StatsWidget } from "@/components/dashboard/StatsWidget"
import { dummyTasks } from "@/lib/dummy-data"

interface StudentDashboardProps {
  userEmail: string
  onLogout: () => void
}

interface Task {
  id: number
  studentId: number
  title: string
  description: string
  status: "pending" | "completed"
  dueDate: string
}

export function StudentDashboard({ userEmail, onLogout }: StudentDashboardProps) {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks.filter((t) => t.studentId === 1))
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleAddTask = (title: string, description: string) => {
    const newTask: Task = {
      id: Math.max(...tasks.map((t) => t.id), 0) + 1,
      studentId: 1,
      title,
      description,
      status: "pending",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    }
    setTasks([...tasks, newTask])
  }

  const handleMarkDone = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: "completed" as const } : task)))
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completedCount = tasks.filter((t) => t.status === "completed").length
  const pendingCount = tasks.filter((t) => t.status === "pending").length

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar open={sidebarOpen} onToggle={setSidebarOpen} onLogout={onLogout} />
      <div className="flex-1 flex flex-col">
        <Navbar email={userEmail} onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-auto p-6 lg:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 mt-2">Welcome back! Manage your tasks efficiently.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatsWidget label="Total Tasks" value={tasks.length} icon="📋" />
              <StatsWidget label="Completed" value={completedCount} icon="✅" />
              <StatsWidget label="Pending" value={pendingCount} icon="⏳" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <TaskInput onAddTask={handleAddTask} />
              </div>

              <div className="lg:col-span-2">
                <TaskList tasks={tasks} onMarkDone={handleMarkDone} onDelete={handleDeleteTask} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
