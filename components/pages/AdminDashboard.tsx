"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Navbar } from "@/components/layout/Navbar"
import { StudentTable } from "@/components/dashboard/StudentTable"
import { TaskDrawer } from "@/components/dashboard/TaskDrawer"
import { dummyStudents, dummyTasks } from "@/lib/dummy-data"

interface AdminDashboardProps {
  userEmail: string
  onLogout: () => void
}

interface Student {
  id: number
  name: string
  email: string
  totalTasks: number
  completedTasks: number
  pendingTasks: number
}

interface Task {
  id: number
  studentId: number
  title: string
  description: string
  status: "pending" | "completed"
  dueDate: string
}

export function AdminDashboard({ userEmail, onLogout }: AdminDashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [students, setStudents] = useState<Student[]>(dummyStudents)
  const [tasks, setTasks] = useState<Task[]>(dummyTasks)

  const handleViewTasks = (student: Student) => {
    setSelectedStudent(student)
  }

  const handleMarkTaskDone = (taskId: number) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: "completed" as const } : task)))
    if (selectedStudent) {
      const studentTasks = tasks.filter((t) => t.studentId === selectedStudent.id)
      const newCompleted = studentTasks.filter(
        (t) => t.id === taskId || (t.id !== taskId && t.status === "completed"),
      ).length
      setStudents(
        students.map((s) =>
          s.id === selectedStudent.id
            ? {
                ...s,
                completedTasks: newCompleted,
                pendingTasks: s.totalTasks - newCompleted,
              }
            : s,
        ),
      )
      setSelectedStudent({
        ...selectedStudent,
        completedTasks: newCompleted,
        pendingTasks: selectedStudent.totalTasks - newCompleted,
      })
    }
  }

  const studentTasks = selectedStudent ? tasks.filter((t) => t.studentId === selectedStudent.id) : []

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar open={sidebarOpen} onToggle={setSidebarOpen} onLogout={onLogout} isAdmin />
      <div className="flex-1 flex flex-col">
        <Navbar email={userEmail} onMenuClick={() => setSidebarOpen(!sidebarOpen)} isAdmin />
        <main className="flex-1 overflow-auto p-6 lg:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-slate-400 mt-2">Monitor student progress and manage tasks.</p>
            </div>

            <div>
              <StudentTable students={students} onViewTasks={handleViewTasks} />
            </div>
          </div>
        </main>
      </div>

      <TaskDrawer
        student={selectedStudent}
        tasks={studentTasks}
        isOpen={selectedStudent !== null}
        onClose={() => setSelectedStudent(null)}
        onMarkTaskDone={handleMarkTaskDone}
      />
    </div>
  )
}
