"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye } from "lucide-react"

interface Student {
  id: number
  name: string
  email: string
  totalTasks: number
  completedTasks: number
  pendingTasks: number
}

interface StudentTableProps {
  students: Student[]
  onViewTasks: (student: Student) => void
}

export function StudentTable({ students, onViewTasks }: StudentTableProps) {
  return (
    <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-white">Students</CardTitle>
        <CardDescription className="text-slate-400">{students.length} students total</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Name</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-300">Email</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-300">Total</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-300">Completed</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-300">Pending</th>
                <th className="text-center py-3 px-4 font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition">
                  <td className="py-3 px-4 text-white">{student.name}</td>
                  <td className="py-3 px-4 text-slate-400">{student.email}</td>
                  <td className="py-3 px-4 text-center font-medium text-white">{student.totalTasks}</td>
                  <td className="py-3 px-4 text-center font-medium text-green-400">{student.completedTasks}</td>
                  <td className="py-3 px-4 text-center font-medium text-orange-400">{student.pendingTasks}</td>
                  <td className="py-3 px-4 text-center">
                    <Button
                      size="sm"
                      onClick={() => onViewTasks(student)}
                      className="bg-blue-600 hover:bg-blue-700 text-white gap-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">View</span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
