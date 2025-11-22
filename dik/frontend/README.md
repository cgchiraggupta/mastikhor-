# Taskive - Modern Task Management App

A beautiful, mobile-first productivity application built with Next.js 16, featuring a sleek dark UI and intuitive task management.

![Taskive App](https://img.shields.io/badge/Next.js-16.0.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)

## ✨ Features

- **📱 Mobile-First Design** - Optimized for phone screens with a responsive layout
- **🏠 Home Dashboard** - View all tasks with circular progress tracking
- **📅 Calendar View** - Timeline-based event management
- **📊 Statistics** - Visual breakdown of tasks, meetings, and goals
- **👤 Profile Management** - User settings and preferences
- **➕ Quick Add** - Create tasks/events via modal or FAB button
- **💾 Local Storage** - Data persists across sessions
- **🎨 Beautiful UI** - Dark theme with gradient accents and smooth animations

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:3000**

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
frontend/
├── app/
│   ├── calendar/          # Calendar page with timeline view
│   ├── profile/           # User profile and settings
│   ├── stats/             # Statistics and analytics
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.js          # Root layout with TaskProvider
│   └── page.js            # Home page with task list
├── components/
│   ├── AddTaskModal.js    # Modal for creating tasks/events
│   ├── BottomNav.js       # Bottom navigation with FAB
│   ├── CircularProgress.js # Progress indicator component
│   └── TaskCard.js        # Individual task card component
├── lib/
│   ├── data.js            # Mock data (tasks, events, stats)
│   └── TaskContext.js     # React Context for state management
└── public/                # Static assets
```

## 🎨 Design System

### Color Palette

```css
--background: #050511       /* Deep dark background */
--surface: #12142b          /* Card surfaces */
--surface-highlight: #1e204a /* Highlighted surfaces */
--primary: #5b4eff          /* Primary purple */
--secondary: #4facfe        /* Secondary blue */
--accent-orange: #ff9f43    /* Orange accents */
--accent-green: #2ecc71     /* Green accents */
--accent-purple: #a55eea    /* Purple accents */
```

### Typography

- Font Family: Inter
- Sizes: 12px (sm), 14px (md), 16px (lg), 20px (xl), 24px (2xl)

## 🔧 Key Components

### TaskContext

Central state management using React Context API:
- Manages tasks and events
- Provides CRUD operations
- Persists to localStorage

```javascript
import { useTasks } from '../lib/TaskContext';

const { tasks, events, stats, addTask, updateTask, deleteTask } = useTasks();
```

### AddTaskModal

Dynamic modal that adapts for Tasks vs Events:
- Task mode: Title, Description, Date, Priority
- Event mode: Additional Time, End Time, Color fields

### BottomNav

Fixed bottom navigation with:
- 4 navigation links (Home, Calendar, Stats, Profile)
- Central FAB button for quick task creation
- Active state indicators

## 📱 Pages

### Home (`/`)
- Welcome header with user greeting
- Circular progress indicator
- Filter tabs (All, Upcoming, Meeting, Project)
- Task list with priority badges

### Calendar (`/calendar`)
- Month selector
- Date strip with active indicator
- Timeline view of events
- Color-coded event cards

### Stats (`/stats`)
- Overall progress circle
- Breakdown cards (Meetings, Tasks, Goals)
- Recent activity list

### Profile (`/profile`)
- User profile card with avatar
- Statistics overview
- Settings menu
- Logout button

## 🛠️ Technologies

- **Framework**: Next.js 16.0.3 (App Router)
- **UI Library**: React 19.2.0
- **Styling**: CSS-in-JS (styled-jsx)
- **State Management**: React Context API
- **Storage**: localStorage
- **Icons**: Inline SVG

## 🔄 State Management

Tasks and events are managed through `TaskContext`:

```javascript
// Add a new task
addTask({
  title: "New Task",
  description: "Task description",
  date: "2025-11-22",
  priority: "High",
  type: "Task"
});

// Update existing task
updateTask({ ...task, title: "Updated Title" });

// Delete task
deleteTask(taskId, "Task");
```

## 🎯 Future Enhancements

- [ ] **Strapi Integration** - Backend CMS for data persistence
- [ ] **Authentication** - User login and registration
- [ ] **Real-time Sync** - Multi-device synchronization
- [ ] **Push Notifications** - Task reminders
- [ ] **Drag & Drop** - Reorder tasks and events
- [ ] **Dark/Light Mode** - Theme toggle
- [ ] **Export/Import** - Data backup functionality

## 🐛 Known Issues

None currently! All UI overlapping issues and button functionality have been fixed.

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Development

### Code Style

- Use functional components with hooks
- Keep components small and focused
- Use styled-jsx for component-scoped styles
- Follow Next.js App Router conventions

### Adding a New Page

1. Create directory in `app/` (e.g., `app/tasks/`)
2. Add `page.js` with your component
3. Import and use `useTasks()` for state
4. Add navigation link in `BottomNav.js` if needed

### Adding a New Component

1. Create file in `components/` (e.g., `components/TaskFilter.js`)
2. Export as default function
3. Import where needed

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the development team.

---

**Built with ❤️ using Next.js and React**
