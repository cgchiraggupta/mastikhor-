"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AddTaskModal from './AddTaskModal';

export default function BottomNav() {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className="bottom-nav">
        <Link href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 2.5L21 9.5V20.5C21 21.0523 20.5523 21.5 20 21.5H4C3.44772 21.5 3 21.0523 3 20.5V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {isActive('/') && <span className="nav-dot"></span>}
        </Link>

        <Link href="/calendar" className={`nav-item ${isActive('/calendar') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {isActive('/calendar') && <span className="nav-dot"></span>}
        </Link>

        <div className="nav-fab-wrapper">
          <button className="nav-fab" onClick={() => setIsModalOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <Link href="/stats" className={`nav-item ${isActive('/stats') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <Link href="/profile" className={`nav-item ${isActive('/profile') ? 'active' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <style jsx>{`
        .bottom-nav {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 440px;
          background: rgba(18, 20, 43, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 100;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .nav-item {
          color: var(--text-secondary);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 40px;
          height: 40px;
          transition: color 0.3s ease;
        }
        .nav-item.active {
          color: var(--text-primary);
        }
        .nav-dot {
          position: absolute;
          bottom: -5px;
          width: 4px;
          height: 4px;
          background: var(--primary);
          border-radius: 50%;
        }
        .nav-fab-wrapper {
          position: relative;
          top: -20px;
        }
        .nav-fab {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--primary);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(91, 78, 255, 0.4);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .nav-fab:active {
          transform: scale(0.95);
        }
      `}</style>
      </nav>

      <AddTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type="Task" />
    </>
  );
}
