"use client"

import { useState } from "react"
import { Login } from "@/components/pages/Login"
import { StudentDashboard } from "@/components/pages/StudentDashboard"
import { AdminDashboard } from "@/components/pages/AdminDashboard"

type UserRole = "none" | "student" | "admin"

export default function Home() {
  const [userRole, setUserRole] = useState<UserRole>("none")
  const [currentUser, setCurrentUser] = useState("")

  if (userRole === "none") {
    return (
      <Login
        onLogin={(email, role) => {
          setCurrentUser(email)
          setUserRole(role as UserRole)
        }}
      />
    )
  }

  return (
    <>
      {userRole === "student" && <StudentDashboard userEmail={currentUser} onLogout={() => setUserRole("none")} />}
      {userRole === "admin" && <AdminDashboard userEmail={currentUser} onLogout={() => setUserRole("none")} />}
    </>
  )
}
