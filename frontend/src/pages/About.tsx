import { Award, Users, Clock, Shield } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-teal-400 text-transparent bg-clip-text">
            About Milestone Construction
          </h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Team at work"
              className="w-full h-64 object-cover rounded-xl shadow-xl mb-8"
            />
            <p className="text-lg text-slate-300 mb-6">
              Since our founding in 2010, Milestone Construction has been at the forefront of innovative
              construction solutions. We specialize in delivering exceptional building projects that combine
              architectural excellence with sustainable practices.
            </p>
            <p className="text-lg text-slate-300">
              Our team of experienced professionals brings decades of combined expertise to every project,
              ensuring the highest standards of quality and craftsmanship in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
              <Award className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Excellence</h3>
              <p className="text-slate-300">
                Committed to delivering the highest quality in every project we undertake.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
              <Users className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Expert Team</h3>
              <p className="text-slate-300">
                Our skilled professionals bring years of experience and dedication.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
              <Clock className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Timely Delivery</h3>
              <p className="text-slate-300">
                We pride ourselves on completing projects on schedule and within budget.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 shadow-xl">
              <Shield className="w-12 h-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-emerald-400">Safety First</h3>
              <p className="text-slate-300">
                Maintaining the highest safety standards in all our operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}