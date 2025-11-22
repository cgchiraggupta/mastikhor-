import "./globals.css";
import BottomNav from "../components/BottomNav";
import { TaskProvider } from "../lib/TaskContext";

export const metadata = {
    title: "Taskive",
    description: "Productivity App",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <TaskProvider>
                    <div className="container">
                        {children}
                        <BottomNav />
                    </div>
                </TaskProvider>
            </body>
        </html>
    );
}
