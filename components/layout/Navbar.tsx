"use client"
import { Menu, Bell, Settings, Moon, Sun } from "lucide-react"
import { useState } from "react"

interface NavbarProps {
  email: string
  onMenuClick: () => void
  isAdmin?: boolean
}

export function Navbar({ email, onMenuClick, isAdmin }: NavbarProps) {
  const [isDark, setIsDark] = useState(true)

  return (
    <nav className="border-b border-slate-700/50 bg-slate-800/50 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-slate-700 rounded-lg transition text-slate-300"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div>
            <h1 className="hidden lg:block font-semibold text-white">{isAdmin ? "Admin" : "Student"} Dashboard</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-slate-300">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-slate-300">
            <Settings className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-slate-700 rounded-lg transition text-slate-400 hover:text-slate-300"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <div className="flex items-center gap-3 pl-3 border-l border-slate-700">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">{email}</p>
              <p className="text-xs text-slate-400">{isAdmin ? "Administrator" : "Student"}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
              {email.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
