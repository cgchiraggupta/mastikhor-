"use client";
import { useState } from 'react';
import { useTasks } from '../lib/TaskContext';

export default function AddTaskModal({ isOpen, onClose, type = "Task" }) {
    const { addTask } = useTasks();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        time: '',
        endTime: '',
        priority: 'Medium',
        type: type,
        color: '#667eea'
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({
            ...formData,
            status: 'Todo',
            assignees: []
        });
        setFormData({
            title: '',
            description: '',
            date: '',
            time: '',
            endTime: '',
            priority: 'Medium',
            type: type,
            color: '#667eea'
        });
        onClose();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Add {type}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter description"
                            rows="3"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {type === "Event" && (
                            <>
                                <div className="form-group">
                                    <label>Start Time</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>End Time</label>
                                    <input
                                        type="time"
                                        name="endTime"
                                        value={formData.endTime}
                                        onChange={handleChange}
                                    />
                                </div>
                            </>
                        )}
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Priority</label>
                            <select name="priority" value={formData.priority} onChange={handleChange}>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>

                        {type === "Event" && (
                            <div className="form-group">
                                <label>Color</label>
                                <input
                                    type="color"
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                />
                            </div>
                        )}
                    </div>

                    <div className="form-actions">
                        <button type="button" className="btn-secondary" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit" className="btn-primary">
                            Add {type}
                        </button>
                    </div>
                </form>
            </div>

            <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }
        .modal-content {
          background: var(--background);
          border-radius: var(--radius-lg);
          width: 100%;
          max-width: 380px;
          max-height: 85vh;
          overflow-y: auto;
          border: 1px solid var(--border);
        }
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid var(--border);
        }
        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .close-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 4px;
        }
        form {
          padding: 20px;
        }
        .form-group {
          margin-bottom: 16px;
          flex: 1;
        }
        .form-row {
          display: flex;
          gap: 12px;
        }
        label {
          display: block;
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 8px;
          font-weight: 500;
        }
        input, textarea, select {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          padding: 10px 12px;
          color: var(--text-primary);
          font-size: 14px;
          font-family: inherit;
        }
        input:focus, textarea:focus, select:focus {
          outline: none;
          border-color: var(--primary);
        }
        input[type="color"] {
          height: 40px;
          padding: 4px;
        }
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
        }
        .btn-secondary, .btn-primary {
          flex: 1;
          padding: 12px;
          border-radius: var(--radius-md);
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: none;
        }
        .btn-secondary {
          background: var(--surface);
          color: var(--text-primary);
          border: 1px solid var(--border);
        }
        .btn-primary {
          background: var(--primary);
          color: white;
        }
      `}</style>
        </div>
    );
}
