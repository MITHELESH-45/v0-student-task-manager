"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, LayoutDashboard, User, LogOut, CheckSquare } from "lucide-react"

interface SidebarProps {
  open: boolean
  onToggle: (open: boolean) => void
  onLogout: () => void
  isAdmin?: boolean
}

export function Sidebar({ open, onToggle, onLogout, isAdmin }: SidebarProps) {
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/60 lg:hidden z-40" onClick={() => onToggle(false)} />}

      <aside
        className={`fixed lg:relative top-0 left-0 h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 transform lg:transform-none transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <CheckSquare className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-bold text-lg text-white">TaskFlow</h2>
            </div>
            <button onClick={() => onToggle(false)} className="lg:hidden p-1 hover:bg-slate-700 rounded text-slate-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/10 text-blue-400 font-medium border border-blue-500/30 transition"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-700/50 text-slate-300 transition"
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-slate-700">
            <Button
              onClick={onLogout}
              className="w-full flex items-center justify-center gap-2 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-600/30 transition"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}
