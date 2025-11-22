export const tasks = [
  {
    id: 1,
    title: "Design Dashboard Overview",
    description: "Refine the main dashboard layout, adjust color hierarchy, and make every component feel more consistent and clean.",
    priority: "Medium",
    date: "November 8, 2025",
    status: "Todo",
    assignees: ["/user1.png", "/user2.png"],
    type: "Task"
  },
  {
    id: 2,
    title: "Prepare Weekly Team Meeting",
    description: "Organize your talking points, update the latest project slides, and set reminders for key discussion topics before 10 AM.",
    priority: "High",
    date: "November 8, 2025",
    status: "Todo",
    assignees: ["/user1.png"],
    type: "Meeting"
  },
  {
    id: 3,
    title: "Code Review: Auth Module",
    description: "Review the pull request for the new authentication module.",
    priority: "High",
    date: "November 8, 2025",
    status: "Done",
    assignees: [],
    type: "Task"
  }
];

export const stats = {
  completion: 62,
  meeting: { current: 1, total: 2 },
  task: { current: 4, total: 8 },
  goals: { current: 4, total: 5 }
};

export const events = [
  {
    id: 1,
    time: "08.00 AM",
    endTime: "09.30 AM",
    title: "Prepare Weekly Team Meeting",
    description: "Organize your talking points, update the latest project slides...",
    color: "#a55eea" // Purple
  },
  {
    id: 2,
    time: "09.30 AM",
    endTime: "10.00 AM",
    title: "Breakfast",
    description: "",
    color: "#4facfe" // Blue
  },
  {
    id: 3,
    time: "11.00 AM",
    endTime: "12.00 PM",
    title: "Design Dashboard Overview",
    description: "Refine the main dashboard layout...",
    color: "#ff9f43" // Orange
  },
  {
    id: 4,
    time: "12.00 PM",
    endTime: "01.00 PM",
    title: "Break, Lunch",
    description: "",
    color: "#2ecc71" // Green
  }
];
