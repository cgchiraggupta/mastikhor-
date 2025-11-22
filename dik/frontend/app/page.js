"use client";
import { useState } from "react";
import CircularProgress from "../components/CircularProgress";
import TaskCard from "../components/TaskCard";
import AddTaskModal from "../components/AddTaskModal";
import { useTasks } from "../lib/TaskContext";

export default function Home() {
  const { tasks, stats } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <header className="header">
        <div className="user-welcome">
          <div className="brand">
            <div className="brand-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z" fill="url(#flameGradient)" stroke="none" />
                <path d="M12 14C12 14 10 16 10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18C14 16 12 14 12 14Z" fill="url(#flameGradient2)" stroke="none" />
                <defs>
                  <linearGradient id="flameGradient" x1="12" y1="2" x2="12" y2="14" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#5b4eff" />
                    <stop offset="100%" stopColor="#a55eea" />
                  </linearGradient>
                  <linearGradient id="flameGradient2" x1="12" y1="14" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#a55eea" />
                    <stop offset="100%" stopColor="#5b4eff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 className="brand-title">Taskive</h1>
          </div>
          <p className="text-secondary text-md">Ready to make today productive?</p>
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div className="avatar-sm">
            <img src="/user1.png" alt="User" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
          </div>
        </div>
      </header>

      <section className="section">
        <h2 className="text-lg" style={{ marginBottom: '16px' }}>Today's Focus</h2>
        <CircularProgress percentage={stats.completion} label="62%" subLabel="Stay consistent!" />
      </section>

      <section className="section">
        <div className="filter-tabs">
          <button className="tab active">All</button>
          <button className="tab">Upcoming</button>
          <button className="tab">Meeting</button>
          <button className="tab">Project</button>
        </div>
      </section>

      <section className="section">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </section>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="Task" />

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          padding-top: 20px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }
        .brand-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .brand-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .icon-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .avatar-sm {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #333;
          border: 2px solid var(--surface);
        }
        .mb-4 { margin-bottom: 16px; }
        .icon-btn-sm {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .filter-tabs {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 16px;
        }
        .tab {
          background: rgba(255,255,255,0.05);
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 10px 20px;
          border-radius: var(--radius-full);
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .tab.active {
          background: var(--surface-highlight);
          color: var(--text-primary);
          border-color: rgba(255,255,255,0.1);
        }
      `}</style>
    </main>
  );
}
