import { ReactElement } from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: ReactElement;
    maxWidth?: string;
    allowScroll?: boolean;
};

export default function Layout({ children, maxWidth = "max-w-5xl", allowScroll = false }: LayoutProps): React.JSX.Element {
    const contentWidthClass = `${maxWidth} w-full mx-auto px-4`;
    
    return (
        <div className={`flex flex-col w-screen bg-black ${allowScroll ? 'min-h-screen overflow-auto' : 'h-screen overflow-hidden'}`}>
            <Header contentWidthClass={contentWidthClass} />
            <main className={`flex flex-grow justify-center pb-8 ${allowScroll ? '' : 'items-center overflow-hidden'} ${contentWidthClass}`}>
                {children}
            </main>
            <Footer contentWidthClass={contentWidthClass} />
        </div>
    );
};
