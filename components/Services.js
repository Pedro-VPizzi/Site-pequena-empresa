function Services() {
    try {
        const services = [
            {
                icon: "fa-code",
                title: "Desenvolvimento Web",
                description: "Criamos websites e aplicações web modernas e responsivas."
            },
            {
                icon: "fa-mobile-screen",
                title: "Apps Mobile",
                description: "Desenvolvimento de aplicativos iOS e Android de alta performance."
            },
            {
                icon: "fa-cloud",
                title: "Cloud Solutions",
                description: "Soluções em nuvem escaláveis e seguras para seu negócio."
            },
            {
                icon: "fa-chart-line",
                title: "Consultoria em TI",
                description: "Assessoria especializada para otimizar seus processos tecnológicos."
            }
        ];

        return (
            <section data-name="services" id="servicos" className="bg-gray-50 section-padding">
                <div data-name="services-container" className="container mx-auto px-6">
                    <div data-name="services-header" className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nossos Serviços
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Oferecemos soluções completas em tecnologia para impulsionar sua empresa
                        </p>
                    </div>
                    
                    <div data-name="services-grid" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index} data-name="service-card" 
                                 className="bg-white p-6 rounded-lg shadow-lg hover-scale">
                                <div data-name="service-icon" className="text-4xl text-indigo-600 mb-4">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Services component error:', error);
        reportError(error);
        return null;
    }
}
