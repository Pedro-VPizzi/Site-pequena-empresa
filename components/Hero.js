function Hero() {
    try {
        return (
            <section data-name="hero" id="inicio" className="gradient-bg min-h-screen flex items-center text-white section-padding">
                <div data-name="hero-content" className="container mx-auto px-6">
                    <div data-name="hero-grid" className="grid md:grid-cols-2 gap-12 items-center">
                        <div data-name="hero-text" className="space-y-6">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                Transformando ideias em soluções digitais
                            </h1>
                            <p className="text-lg md:text-xl opacity-90">
                                Desenvolvemos soluções tecnológicas inovadoras para impulsionar seu negócio rumo ao futuro.
                            </p>
                            <div data-name="hero-buttons" className="flex flex-wrap gap-4">
                                <a href="#contato" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                                    Fale Conosco
                                </a>
                                <a href="#servicos" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all">
                                    Nossos Serviços
                                </a>
                            </div>
                        </div>
                        <div data-name="hero-image" className="hidden md:block">
                            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                                 alt="Tecnologia em ação" 
                                 className="rounded-lg shadow-2xl hover-scale"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
