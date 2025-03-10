import { ReactNode } from "react";
import Header from "./header.tsx";
import Footer from "./footer.tsx";

type LayoutProps = { children: ReactNode; darkMode: boolean; setDarkMode: (mode: boolean) => void; };

export default function AppLayout({ children, darkMode, setDarkMode }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="flex-1 container mx-auto p-4">{children}</main>
            <Footer />
        </div>
    );
}