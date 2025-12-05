export const dummyStudents = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@school.com",
    totalTasks: 12,
    completedTasks: 8,
    pendingTasks: 4,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@school.com",
    totalTasks: 8,
    completedTasks: 5,
    pendingTasks: 3,
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol@school.com",
    totalTasks: 15,
    completedTasks: 12,
    pendingTasks: 3,
  },
  {
    id: 4,
    name: "David Brown",
    email: "david@school.com",
    totalTasks: 10,
    completedTasks: 6,
    pendingTasks: 4,
  },
]

export const dummyTasks = [
  {
    id: 1,
    studentId: 1,
    title: "Complete Math Assignment",
    description: "Chapter 5 exercises from pages 45-52",
    status: "pending" as const,
    dueDate: "2024-12-10",
  },
  {
    id: 2,
    studentId: 1,
    title: "Read History Chapter",
    description: "Prepare notes on the Renaissance period",
    status: "completed" as const,
    dueDate: "2024-12-08",
  },
  {
    id: 3,
    studentId: 1,
    title: "Science Project",
    description: "Build a model of the solar system",
    status: "pending" as const,
    dueDate: "2024-12-15",
  },
  {
    id: 4,
    studentId: 1,
    title: "English Essay",
    description: 'Write 500 words on "The Great Gatsby"',
    status: "completed" as const,
    dueDate: "2024-12-05",
  },
  {
    id: 5,
    studentId: 1,
    title: "Physics Lab Report",
    description: "Document findings from the pendulum experiment",
    status: "pending" as const,
    dueDate: "2024-12-12",
  },
  {
    id: 6,
    studentId: 2,
    title: "Math Quiz Prep",
    description: "Review formulas and practice problems",
    status: "pending" as const,
    dueDate: "2024-12-09",
  },
  {
    id: 7,
    studentId: 2,
    title: "Group Project",
    description: "Collaborate with team on presentation",
    status: "completed" as const,
    dueDate: "2024-12-07",
  },
]

export const studentUserAccounts = [
  { email: "student@example.com", password: "password123" },
  { email: "alice@school.com", password: "password123" },
]

export const adminUserAccounts = [
  { email: "admin@example.com", password: "admin123" },
  { email: "teacher@school.com", password: "admin123" },
]
