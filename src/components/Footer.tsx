
type FooterProps = {
    contentWidthClass: string;
};
  
export default function Footer({ contentWidthClass }: FooterProps) {
    return (
        <footer className="w-full py-4 border-t-2 border-gray-800">
            <div className={contentWidthClass}>
                <div className="text-center text-sm text-gray-400">
                    © 2025 Grayson Rechsteiner
                </div>
            </div>
        </footer>
    );
}
