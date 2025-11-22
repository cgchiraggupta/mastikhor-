"use client";
import { useState } from "react";
import AddTaskModal from "../../components/AddTaskModal";
import { useTasks } from "../../lib/TaskContext";

export default function Calendar() {
  const { events } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const days = [
    { day: "Wed", date: 22 },
    { day: "Thu", date: 23, active: true },
    { day: "Fri", date: 24 },
    { day: "Sat", date: 25 },
  ];

  return (
    <main>
      <header className="header">
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg" style={{ flex: 1, textAlign: 'center' }}>Calendar</h1>
        <button className="icon-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </button>
      </header>

      <section className="calendar-widget">
        <div className="month-selector">
          <div className="flex-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>October</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <div className="date-strip">
          <button className="nav-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="days-grid">
            {days.map((d, i) => (
              <div key={i} className={`day-item ${d.active ? 'active' : ''}`}>
                <span className="day-date">{d.date}</span>
                <span className="day-name">{d.day}</span>
                {d.active && <div className="active-indicator"></div>}
              </div>
            ))}
          </div>

          <button className="nav-arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </section>

      <section className="timeline-section">
        <div className="flex-between mb-4">
          <h2 className="text-lg">Today, Oct 23</h2>
          <button className="add-btn" onClick={() => setIsModalOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>

        <div className="timeline">
          {events.map(event => (
            <div key={event.id} className="timeline-item">
              <div className="time-col">
                <span className="time-text">{event.time}</span>
              </div>
              <div className="event-card" style={{ borderLeft: `6px solid ${event.color}` }}>
                <h3 className="event-title">{event.title}</h3>
                {event.description && <p className="event-desc">{event.description}</p>}
                <div className="event-footer">
                  <span className="event-time">{event.time} - {event.endTime}</span>
                  <div className="avatars">
                    {/* Avatars */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="timeline-item">
            <div className="time-col">
              <span className="time-text">01.00 PM</span>
            </div>
          </div>
        </div>
      </section>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="Event" />

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
        .calendar-widget {
          background: #1e204a;
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid rgba(255,255,255,0.05);
        }
        .month-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          margin-bottom: 16px;
          color: var(--text-secondary);
        }
        .date-strip {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-arrow {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .days-grid {
          display: flex;
          gap: 16px;
        }
        .day-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          position: relative;
          color: var(--text-secondary);
        }
        .day-item.active {
          color: var(--text-primary);
        }
        .day-date {
          font-size: 18px;
          font-weight: 600;
        }
        .day-name {
          font-size: 12px;
        }
        .active-indicator {
          position: absolute;
          bottom: -12px;
          width: 4px;
          height: 16px;
          background: var(--accent-orange);
          border-radius: 2px;
        }
        .mb-4 { margin-bottom: 24px; }
        .add-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: none;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .timeline-item {
          display: flex;
          gap: 16px;
        }
        .time-col {
          width: 60px;
          flex-shrink: 0;
        }
        .time-text {
          font-size: 12px;
          color: var(--text-secondary);
        }
        .event-card {
          flex: 1;
          background: rgba(30, 32, 74, 0.6);
          border-radius: 12px;
          padding: 16px;
          border: 1px solid rgba(255,255,255,0.03);
        }
        .event-title {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .event-desc {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .event-time {
          font-size: 10px;
          color: var(--text-secondary);
        }
      `}</style>
    </main>
  );
}
