export default function CircularProgress({ percentage, label, subLabel }) {
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-widget">
      <button className="widget-menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="5" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="19" r="1" fill="currentColor" />
        </svg>
      </button>
      <div className="progress-ring-wrapper">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="progress-ring"
        >
          <circle
            stroke="rgba(255,255,255,0.05)"
            strokeWidth={stroke}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="url(#gradient)"
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeWidth={stroke}
            strokeLinecap="round"
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="progress-ring-circle"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#5b4eff" />
              <stop offset="100%" stopColor="#a55eea" />
            </linearGradient>
          </defs>
        </svg>
        <div className="progress-text">
          <span className="percentage">{percentage}%</span>
          <span className="sub-text">{subLabel}</span>
        </div>
      </div>

      <div className="stats-list">
        <div className="stat-item">
          <span className="stat-label">Meeting</span>
          <div className="stat-bar-bg"><div className="stat-bar" style={{ width: '50%', background: '#a55eea' }}></div></div>
          <span className="stat-value">1 of 2</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Task</span>
          <div className="stat-bar-bg"><div className="stat-bar" style={{ width: '50%', background: '#2ecc71' }}></div></div>
          <span className="stat-value">4 of 8</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Goals</span>
          <div className="stat-bar-bg"><div className="stat-bar" style={{ width: '80%', background: '#ff9f43' }}></div></div>
          <span className="stat-value">4 of 5</span>
        </div>
      </div>

      <style jsx>{`
        .circular-widget {
          background: #1e204a;
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          position: relative;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .widget-menu {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
        }
        .progress-ring-wrapper {
          position: relative;
          width: 100px;
          height: 100px;
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
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .sub-text {
          font-size: 10px;
          color: var(--text-secondary);
        }
        .stats-list {
          flex: 1;
          margin-left: 20px;
        }
        .stat-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 12px;
          color: var(--text-secondary);
        }
        .stat-label {
          width: 50px;
        }
        .stat-bar-bg {
          flex: 1;
          height: 4px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          margin: 0 10px;
          overflow: hidden;
        }
        .stat-bar {
          height: 100%;
          border-radius: 2px;
        }
        .stat-value {
          width: 35px;
          text-align: right;
        }
      `}</style>
    </div>
  );
}
