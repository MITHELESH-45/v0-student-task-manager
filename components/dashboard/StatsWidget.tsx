"use client"

import { Card, CardContent } from "@/components/ui/card"

interface StatsWidgetProps {
  label: string
  value: number
  icon: string
}

export function StatsWidget({ label, value, icon }: StatsWidgetProps) {
  return (
    <Card className="border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-lg transition-shadow shadow-md">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">{label}</p>
            <p className="text-3xl font-bold text-white mt-1">{value}</p>
          </div>
          <div className="text-4xl opacity-60">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}
