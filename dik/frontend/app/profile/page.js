"use client";

export default function Profile() {
  const settings = [
    { icon: "👤", label: "Edit Profile", action: "profile" },
    { icon: "🔔", label: "Notifications", action: "notifications" },
    { icon: "🎨", label: "Appearance", action: "appearance" },
    { icon: "🔒", label: "Privacy & Security", action: "privacy" },
    { icon: "💾", label: "Data & Storage", action: "storage" },
    { icon: "❓", label: "Help & Support", action: "help" },
  ];

  return (
    <main>
      <header className="header">
        <h1 className="text-lg">Profile</h1>
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </header>

      <section className="section">
        <div className="profile-card">
          <div className="avatar-large">
            <span className="avatar-text">F</span>
          </div>
          <h2 className="profile-name">Farhan</h2>
          <p className="profile-email">farhan@taskive.app</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </section>

      <section className="section">
        <h2 className="text-lg mb-4">Statistics</h2>
        <div className="stats-row">
          <div className="stat-box">
            <span className="stat-number">24</span>
            <span className="stat-label">Tasks Done</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">8</span>
            <span className="stat-label">In Progress</span>
          </div>
          <div className="stat-box">
            <span className="stat-number">12</span>
            <span className="stat-label">Meetings</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="text-lg mb-4">Settings</h2>
        <div className="settings-list">
          {settings.map((setting, i) => (
            <button key={i} className="setting-item">
              <div className="setting-left">
                <span className="setting-icon">{setting.icon}</span>
                <span className="setting-label">{setting.label}</span>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <button className="logout-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
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
        .profile-card {
          background: var(--surface);
          border-radius: var(--radius-lg);
          padding: 32px 24px;
          text-align: center;
          border: 1px solid var(--border);
        }
        .avatar-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-text {
          font-size: 32px;
          font-weight: 600;
          color: white;
        }
        .profile-name {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .profile-email {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .edit-profile-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: var(--radius-full);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
        }
        .mb-4 { margin-bottom: 16px; }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .stat-box {
          background: var(--surface);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 24px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-secondary);
        }
        .settings-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .setting-item {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: background 0.2s ease;
          position: relative;
          z-index: 1;
        }
        .setting-item:hover {
          background: var(--surface-highlight);
        }
        .setting-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .setting-icon {
          font-size: 20px;
        }
        .setting-label {
          font-size: 14px;
        }
        .logout-btn {
          width: 100%;
          background: rgba(255, 59, 48, 0.1);
          border: 1px solid rgba(255, 59, 48, 0.3);
          color: #ff3b30;
          padding: 14px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
      `}</style>
    </main>
  );
}
