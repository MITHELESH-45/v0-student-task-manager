"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

interface TaskInputProps {
  onAddTask: (title: string, description: string) => void
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      onAddTask(title, description)
      setTitle("")
      setDescription("")
    }
  }

  return (
    <Card className="border-slate-700 bg-slate-800/50 backdrop-blur-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-white">Add New Task</CardTitle>
        <CardDescription className="text-slate-400">Create a task to track</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Task Name</label>
            <Input
              placeholder="Enter task name..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
            <Textarea
              placeholder="Enter task description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-blue-500"
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white gap-2"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
