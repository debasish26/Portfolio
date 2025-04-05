import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram } from 'lucide-react';
import SocialLink from './SocialLink';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900">
            <div className="container mx-auto px-6">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Who I am</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="glass-card p-4 group hover:scale-[1.02] transition-transform duration-300 flex justify-center" style={{ maxWidth: "860px",maxHeight:"1024px", margin: "0 auto" }}>
                        <img
                            src="/images/profile/profile.jpg"
                            alt="Profile"
                            className="rounded-lg shadow-2xl object-cover"
                            style={{  height: "69vh", maxWidth: "100%" }}
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold gradient-text">MERN Stack Developer & Cyber Security Enthusiast</h3>
                        <p className="text-gray-300 leading-relaxed">
                            I'm a 19-year-old programmer passionate about building web applications and exploring cyber security.
                            I specialize in MERN stack development, creating robust solutions with modern technologies. When I'm not coding,
                            I enjoy exploring new security concepts and keeping up with the latest tech trends.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <Mail className="text-blue-500 group-hover:rotate-12 transition-transform" />
                                <span>debasish024h@example.com</span>
                            </div>
                            <div className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <MapPin className="text-blue-500 group-hover:rotate-12 transition-transform" />
                                <span>Bhubaneswar, India</span>
                            </div>
                            <div className="glass-card p-4 flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group">
                                <Phone className="text-blue-500 group-hover:rotate-12 transition-transform" />
                                <span>+91 7894090760</span>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                            <SocialLink href="https://github.com/debasish26" icon={<Github size={24} />} />
                            <SocialLink href="https://www.linkedin.com/in/debashish-mahanta-720184320/" icon={<Linkedin size={24} />} />
                            <SocialLink href="https://www.instagram.com/de_bashish024/" icon={<Instagram size={24} />} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
