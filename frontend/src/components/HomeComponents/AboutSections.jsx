import { Award, Clock, Shield, Users } from 'lucide-react'
import React from 'react'
import { primary_text_color, primary_text_gradient } from '../../theme/text.style'

const AboutSections = () => {
    return (
        <div className="pt-20 min-h-screen bg-black">
            <div className="container mx-auto px-6 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className={`text-4xl font-bold mb-8 text-center ${primary_text_gradient} bg-clip-text `}>
                        About Milestone Construction
                    </h1>

                    <div className="mb-12">
                        <img
                            src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                            alt="Team at work"
                            className="w-full h-64 object-cover rounded-xl shadow-xl mb-8"
                        />
                        <p className="text-lg text-slate-300 mb-6">
                            Milestone, a newly launched construction company, is making its mark in Pune city despite its modest size. Founded in 2025, this small-scale firm specializes in land and building projects, bringing a fresh perspective to the industry. Though it’s early days for the company, Milestone is backed by a team with five years of collective experience, giving it a solid starting point in the competitive construction landscape.
                        </p>
                        <p className="text-lg text-slate-300 mb-6">
                            Based in Pune, a city experiencing rapid urban growth, Milestone focuses on delivering tailored solutions in land development and building construction. As a small company, it prides itself on agility and personalized service, catering to the unique needs of its clients. Whether it’s residential homes or compact commercial spaces, Milestone aims to provide quality craftsmanship within its niche.
                        </p>
                        <p className="text-lg text-slate-300 mb-6">
                            While the company may be new and small, its ambitions are anything but. With Pune’s real estate market on the rise, Milestone is poised to grow steadily, leveraging its experience and local roots to establish a foothold. This young startup represents a blend of enthusiasm and expertise, making it a noteworthy addition to the city’s construction scene.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                            <Award className={`w-12 h-12 text-emerald-400 mb-4 ${primary_text_color}`} />
                            <h3 className={`text-xl font-bold mb-2 ${primary_text_color}`}>Excellence</h3>
                            <p className="text-slate-300">
                                Committed to delivering the highest quality in every project we undertake.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                            <Users className={`w-12 h-12 text-emerald-400 mb-4 ${primary_text_color}`} />
                            <h3 className={`text-xl font-bold mb-2 ${primary_text_color}`}>Expert Team</h3>
                            <p className="text-slate-300">
                                Our skilled professionals bring years of experience and dedication.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                            <Clock className={`w-12 h-12 text-emerald-400 mb-4 ${primary_text_color}`} />
                            <h3 className={`text-xl font-bold mb-2 ${primary_text_color}`}>Timely Delivery</h3>
                            <p className="text-slate-300">
                                We pride ourselves on completing projects on schedule and within budget.
                            </p>
                        </div>
                        <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
                            <Shield className={`w-12 h-12 text-emerald-400 mb-4 ${primary_text_color}`} />
                            <h3 className={`text-xl font-bold mb-2 ${primary_text_color}`}>Safety First</h3>
                            <p className="text-slate-300">
                                Maintaining the highest safety standards in all our operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSections