
type FooterProps = {

};
  
export default function Footer({ }: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white py-4 border-t border-gray-800">
            <div className="container mx-auto px-4 text-center text-gray-400">
                © {new Date().getFullYear()} My Website. All rights reserved.
            </div>
        </footer>
    );
}
