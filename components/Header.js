function Header() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);
        const [isScrolled, setIsScrolled] = React.useState(false);

        React.useEffect(() => {
            const handleScroll = () => {
                setIsScrolled(window.scrollY > 50);
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);

        return (
            <header data-name="header" className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
                <nav data-name="nav" className="container mx-auto px-6 py-3">
                    <div data-name="nav-content" className="flex items-center justify-between">
                        <div data-name="logo" className="text-2xl font-bold text-indigo-600">
                            TechSolutions
                        </div>
                        
                        <div data-name="mobile-menu-button" className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600">
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                        
                        <div data-name="desktop-menu" className="hidden md:flex space-x-8">
                            <a href="#inicio" className="text-gray-600 hover:text-indigo-600">Início</a>
                            <a href="#servicos" className="text-gray-600 hover:text-indigo-600">Serviços</a>
                            <a href="#equipe" className="text-gray-600 hover:text-indigo-600">Equipe</a>
                            <a href="#contato" className="text-gray-600 hover:text-indigo-600">Contato</a>
                        </div>
                    </div>
                    
                    {isOpen && (
                        <div data-name="mobile-menu" className="md:hidden mt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="#inicio" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600">Início</a>
                                <a href="#servicos" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600">Serviços</a>
                                <a href="#equipe" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600">Equipe</a>
                                <a href="#contato" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-indigo-600">Contato</a>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
