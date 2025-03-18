function Contact() {
    try {
        const [formData, setFormData] = React.useState({
            name: '',
            email: '',
            message: ''
        });
        const [status, setStatus] = React.useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        };

        return (
            <section data-name="contact" id="contato" className="gradient-bg text-white section-padding">
                <div data-name="contact-container" className="container mx-auto px-6">
                    <div data-name="contact-content" className="grid md:grid-cols-2 gap-12">
                        <div data-name="contact-info">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Entre em Contato
                            </h2>
                            <p className="text-lg mb-8 opacity-90">
                                Estamos prontos para ajudar a transformar suas ideias em realidade.
                            </p>
                            <div data-name="contact-details" className="space-y-4">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt w-8"></i>
                                    <span>Av. Tecnologia, 1000 - São Paulo, SP</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-phone w-8"></i>
                                    <span>(11) 9999-9999</span>
                                </div>
                                <div className="flex items-center">
                                    <i className="fas fa-envelope w-8"></i>
                                    <span>contato@techsolutions.com</span>
                                </div>
                            </div>
                        </div>

                        <div data-name="contact-form">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:border-opacity-100"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:border-opacity-100"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block mb-2">Mensagem</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                        className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:border-opacity-100"
                                    ></textarea>
                                </div>
                                <button type="submit" className="w-full bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                                    Enviar Mensagem
                                </button>
                                {status === 'success' && (
                                    <div className="text-center text-green-300">
                                        Mensagem enviada com sucesso!
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
        return null;
    }
}
