import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
    maxWidth?: string;
};

export default function Layout({ children, maxWidth = "max-w-5xl" }: LayoutProps) {
    const contentWidthClass = `${maxWidth} w-full mx-auto px-4`;
    
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Header contentWidthClass={contentWidthClass} />
            <main className={`flex flex-col flex-grow pb-8 ${contentWidthClass}`}>
                {children}
            </main>
            <Footer contentWidthClass={contentWidthClass} />
        </div>
    );
};