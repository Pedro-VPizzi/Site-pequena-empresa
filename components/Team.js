function Team() {
    try {
        const team = [
            {
                name: "Ana Silva",
                role: "CEO & Fundadora",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            },
            {
                name: "Pedro Santos",
                role: "CTO",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            },
            {
                name: "Mariana Costa",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            }
        ];

        return (
            <section data-name="team" id="equipe" className="section-padding">
                <div data-name="team-container" className="container mx-auto px-6">
                    <div data-name="team-header" className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            Nossa Equipe
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Conheça os profissionais dedicados que fazem a diferença em cada projeto
                        </p>
                    </div>
                    
                    <div data-name="team-grid" className="grid md:grid-cols-3 gap-12">
                        {team.map((member, index) => (
                            <div key={index} data-name="team-member" className="text-center">
                                <div data-name="member-image" className="mb-4">
                                    <img src={member.image} 
                                         alt={member.name}
                                         className="w-48 h-48 rounded-full mx-auto object-cover hover-scale" 
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-gray-600">
                                    {member.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Team component error:', error);
        reportError(error);
        return null;
    }
}
