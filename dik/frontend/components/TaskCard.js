export default function TaskCard({ task }) {
  const priorityColors = {
    High: '#ff9f43',
    Medium: '#f1c40f',
    Low: '#2ecc71'
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <button className="more-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </div>

      <p className="task-desc">{task.description}</p>

      <div className="task-footer">
        <div className="task-meta">
          <span className="priority-badge">
            <span className="priority-dot" style={{ backgroundColor: priorityColors[task.priority] || '#fff' }}></span>
            {task.priority}
          </span>
          <span className="date-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 4 }}>
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {task.date}
          </span>
        </div>

        <div className="assignees">
          {task.assignees.map((src, i) => (
            <div key={i} className="avatar" style={{ backgroundColor: '#333' }}>
              {/* Placeholder for avatar */}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .task-card {
          background: var(--surface);
          border-radius: var(--radius-md);
          padding: 20px;
          margin-bottom: 16px;
          border: 1px solid rgba(255,255,255,0.03);
          transition: transform 0.2s ease;
        }
        .task-card:active {
            transform: scale(0.98);
        }
        .task-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }
        .task-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .more-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .task-desc {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.5;
        }
        .task-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .task-meta {
          display: flex;
          gap: 12px;
        }
        .priority-badge, .date-badge {
          display: flex;
          align-items: center;
          font-size: 11px;
          color: var(--text-secondary);
          background: rgba(255,255,255,0.05);
          padding: 6px 10px;
          border-radius: 8px;
          font-weight: 500;
        }
        .priority-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          margin-right: 6px;
        }
        .assignees {
          display: flex;
        }
        .avatar {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid var(--surface);
          margin-left: -8px;
        }
        .avatar:first-child {
          margin-left: 0;
        }
      `}</style>
    </div>
  );
}
