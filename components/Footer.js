function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div data-name="footer-container" className="container mx-auto px-6">
                    <div data-name="footer-content" className="grid md:grid-cols-4 gap-8">
                        <div data-name="footer-about">
                            <h3 className="text-xl font-bold mb-4">TechSolutions</h3>
                            <p className="text-gray-400">
                                Transformando o futuro através da tecnologia e inovação.
                            </p>
                        </div>
                        <div data-name="footer-links">
                            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2">
                                <li><a href="#inicio" className="text-gray-400 hover:text-white">Início</a></li>
                                <li><a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a></li>
                                <li><a href="#equipe" className="text-gray-400 hover:text-white">Equipe</a></li>
                                <li><a href="#contato" className="text-gray-400 hover:text-white">Contato</a></li>
                            </ul>
                        </div>
                        <div data-name="footer-services">
                            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
                            <ul className="space-y-2">
                                <li className="text-gray-400">Desenvolvimento Web</li>
                                <li className="text-gray-400">Apps Mobile</li>
                                <li className="text-gray-400">Cloud Solutions</li>
                                <li className="text-gray-400">Consultoria em TI</li>
                            </ul>
                        </div>
                        <div data-name="footer-social">
                            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white text-xl">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-name="footer-bottom" className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 TechSolutions. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
