import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from 'lucide-react';
import SocialLink from './SocialLink';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-navy-900">
            <div className="container mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's connect and build something amazing</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <p className="text-gray-300 leading-relaxed">
                            I'm interested in web development opportunities, especially those involving MERN stack
                            and cyber security. Whether you want to discuss a project or just say hello, feel free to reach out!
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

                        <div className="flex gap-4">
                            <SocialLink href="https://github.com/debasish26" icon={<Github size={24} />} />
                            <SocialLink href="https://www.linkedin.com/in/debashish-mahanta-720184320/" icon={<Linkedin size={24} />} />
                            <SocialLink href="https://www.instagram.com/de_bashish024/" icon={<Instagram size={24} />} />
                        </div>
                    </div>

                    <form className="glass-card p-8 space-y-6 hover:scale-[1.01] transition-transform">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input-field"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input-field"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={6}
                            className="input-field"
                        ></textarea>
                        <button className="btn-primary w-full group">
                            <span className="group-hover:translate-x-1 transition-transform inline-block">
                                Send Message
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
