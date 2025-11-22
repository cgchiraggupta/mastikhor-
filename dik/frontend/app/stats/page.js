"use client";
import { useTasks } from "../../lib/TaskContext";

export default function Stats() {
  const { stats, tasks } = useTasks();

  return (
    <main>
      <header className="header">
        <h1 className="text-lg">Statistics</h1>
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </header>

      <section className="section">
        <h2 className="text-lg mb-4">Overall Progress</h2>
        <div className="progress-container">
          <div className="progress-ring-wrapper">
            <svg height="120" width="120" className="progress-ring">
              <circle
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="12"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
              />
              <circle
                stroke="var(--primary)"
                strokeDasharray={`${(stats.completion / 100) * 314} 314`}
                strokeWidth="12"
                strokeLinecap="round"
                fill="transparent"
                r="50"
                cx="60"
                cy="60"
                className="progress-ring-circle"
              />
            </svg>
            <div className="progress-text">
              <span className="percentage">{stats.completion}%</span>
              <span className="sub-text">Tasks Completed</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-lg mb-4">Breakdown</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Meetings</span>
              <span className="stat-value">{stats.meeting.current}/{stats.meeting.total}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Tasks</span>
              <span className="stat-value">{stats.task.current}/{stats.task.total}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Goals</span>
              <span className="stat-value">{stats.goals.current}/{stats.goals.total}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-lg mb-4">Recent Activity</h2>
        <div className="activity-list">
          {tasks.slice(0, 3).map(task => (
            <div key={task.id} className="activity-item">
              <div className="activity-dot" style={{ background: task.status === 'Done' ? '#2ecc71' : '#ff9f43' }}></div>
              <div className="activity-content">
                <h3 className="activity-title">{task.title}</h3>
                <p className="activity-time">{task.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          padding-top: 20px;
        }
        .icon-btn {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .progress-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
          background: var(--surface);
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
        }
        .progress-ring-wrapper {
          position: relative;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .progress-ring-circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
        .progress-text {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .percentage {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sub-text {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .mb-4 { margin-bottom: 16px; }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        .stat-card {
          background: var(--surface);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          border: 1px solid var(--border);
        }
        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-info {
          display: flex;
          flex-direction: column;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .stat-value {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .activity-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .activity-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .activity-content {
          flex: 1;
        }
        .activity-title {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .activity-time {
          font-size: 12px;
          color: var(--text-secondary);
        }
      `}</style>
    </main>
  );
}
