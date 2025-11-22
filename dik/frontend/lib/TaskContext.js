"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { tasks as initialTasks, events as initialEvents, stats as initialStats } from './data';

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(initialTasks);
    const [events, setEvents] = useState(initialEvents);
    const [stats, setStats] = useState(initialStats);

    // Load from local storage on mount (optional, for persistence across reloads)
    useEffect(() => {
        const storedTasks = localStorage.getItem('taskive_tasks');
        const storedEvents = localStorage.getItem('taskive_events');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
        if (storedEvents) setEvents(JSON.parse(storedEvents));
    }, []);

    // Save to local storage whenever data changes
    useEffect(() => {
        localStorage.setItem('taskive_tasks', JSON.stringify(tasks));
        localStorage.setItem('taskive_events', JSON.stringify(events));
    }, [tasks, events]);

    const addTask = (newTask) => {
        const task = { ...newTask, id: Date.now() };
        if (task.type === 'Event') {
            setEvents([...events, task]);
        } else {
            setTasks([...tasks, task]);
        }
    };

    const updateTask = (updatedTask) => {
        if (updatedTask.type === 'Event') {
            setEvents(events.map(e => e.id === updatedTask.id ? updatedTask : e));
        } else {
            setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
        }
    };

    const deleteTask = (id, type) => {
        if (type === 'Event') {
            setEvents(events.filter(e => e.id !== id));
        } else {
            setTasks(tasks.filter(t => t.id !== id));
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, events, stats, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}
